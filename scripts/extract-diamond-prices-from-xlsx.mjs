import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const ROOT = process.cwd();

const INPUT_FILE = path.join(
  ROOT,
  'data',
  'COPA JOIAS.xlsx'
);

const OUTPUT_FILE = path.join(
  ROOT,
  'data',
  'diamond-prices.csv'
);

/*
|--------------------------------------------------------------------------
| CONFIGURAÇÃO DAS TABELAS
|--------------------------------------------------------------------------
|
| rowStart é a primeira linha da planilha que contém fatores numéricos.
| É 1-based, ou seja:
| rowStart: 3 = linha 3 do Excel
|
*/

const TABLES = [
  {
    sheet: 'Table 2',
    type: 'grouped',
    rowStart: 3,
    left: {
      minCarat: 0.01,
      maxCarat: 0.03,
    },
    right: {
      minCarat: 0.04,
      maxCarat: 0.07,
    },
  },

  {
    sheet: 'Table 3',
    type: 'grouped',
    rowStart: 3,
    left: {
      minCarat: 0.08,
      maxCarat: 0.14,
    },
    right: {
      minCarat: 0.15,
      maxCarat: 0.17,
    },
  },

  {
    sheet: 'Table 4',
    type: 'grouped',
    rowStart: 3,
    left: {
      minCarat: 0.18,
      maxCarat: 0.22,
    },
    right: {
      minCarat: 0.23,
      maxCarat: 0.29,
    },
  },

  {
    sheet: 'Table 5',
    type: 'individual',
    rowStart: 3,
    left: {
      minCarat: 0.30,
      maxCarat: 0.39,
    },
    right: {
      minCarat: 0.40,
      maxCarat: 0.49,
    },
  },

  {
    sheet: 'Table 7',
    type: 'individual',
    rowStart: 5,
    left: {
      minCarat: 0.50,
      maxCarat: 0.69,
    },
    right: {
      minCarat: 0.70,
      maxCarat: 0.89,
    },
  },

  {
    sheet: 'Table 10',
    type: 'individual',
    rowStart: 3,
    left: {
      minCarat: 0.90,
      maxCarat: 0.99,
    },
    right: {
      minCarat: 1.00,
      maxCarat: 1.49,
    },
  },

  {
    sheet: 'Table 12',
    type: 'individual',
    rowStart: 3,
    left: {
      minCarat: 1.50,
      maxCarat: 1.99,
    },
    right: {
      minCarat: 2.00,
      maxCarat: 2.99,
    },
  },

  {
    sheet: 'Table 14',
    type: 'individual',
    rowStart: 3,
    left: {
      minCarat: 3.00,
      maxCarat: 3.99,
    },
    right: {
      minCarat: 4.00,
      maxCarat: 4.99,
    },
  },

  {
    sheet: 'Table 16',
    type: 'individual',
    rowStart: 5,
    left: {
      minCarat: 5.00,
      maxCarat: 5.99,
    },
    right: {
      minCarat: 10.00,
      maxCarat: 10.99,
    },
  },
];

/*
|--------------------------------------------------------------------------
| CLASSIFICAÇÕES
|--------------------------------------------------------------------------
*/

const GROUPED_COLORS = [
  'D-F',
  'G-H',
  'I-J',
  'K-L',
  'M-N',
];

const GROUPED_CLARITIES = [
  'IF-VVS',
  'VS',
  'SI1',
  'SI2',
  'SI3',
  'I1',
  'I2',
  'I3',
];

const INDIVIDUAL_COLORS = [
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
];

const INDIVIDUAL_CLARITIES = [
  'IF',
  'VVS1',
  'VVS2',
  'VS1',
  'VS2',
  'SI1',
  'SI2',
  'SI3',
  'I1',
  'I2',
  'I3',
];

/*
|--------------------------------------------------------------------------
| UTILITÁRIOS
|--------------------------------------------------------------------------
*/

function getCellValue(
  sheet,
  rowIndex,
  columnIndex
) {
  const address =
    XLSX.utils.encode_cell({
      r: rowIndex,
      c: columnIndex,
    });

  return sheet[address]?.v;
}

/*
 * Extrai todos os números existentes em uma célula.
 *
 * Exemplos:
 *
 * 55
 *   -> [55]
 *
 * "55\n44\n38"
 *   -> [55, 44, 38]
 *
 * "8,3"
 *   -> [8.3]
 */

function extractNumbers(
  value
) {
  if (
    value === null ||
    value === undefined ||
    value === ''
  ) {
    return [];
  }

  if (
    typeof value === 'number'
  ) {
    return Number.isFinite(value)
      ? [value]
      : [];
  }

  const text =
    String(value).trim();

  const matches =
    text.match(
      /-?\d+(?:[.,]\d+)?/g
    );

  if (!matches) {
    return [];
  }

  return matches
    .map((value) =>
      Number(
        value.replace(',', '.')
      )
    )
    .filter(Number.isFinite);
}

/*
|--------------------------------------------------------------------------
| COLETA DE UMA COLUNA
|--------------------------------------------------------------------------
|
| Algumas tabelas convertidas possuem:
|
| B5 = "55\n44\n38"
| B6 = "32\n26"
| B7 = "23\n19\n16"
| B8 = "15\n14"
|
| Juntando tudo:
|
| 10 valores
|
| D E F G H I J K L M
|
*/

function collectFactors(
  sheet,
  columnIndex,
  rowStart,
  expectedCount
) {
  const factors = [];

  /*
   * Permitimos até 30 linhas abaixo do início.
   * O loop para assim que atingir a quantidade esperada.
   */

  for (
    let offset = 0;
    offset < 30;
    offset += 1
  ) {
    const rowIndex =
      rowStart - 1 + offset;

    const value =
      getCellValue(
        sheet,
        rowIndex,
        columnIndex
      );

    const numbers =
      extractNumbers(value);

    for (
      const number of numbers
    ) {
      factors.push(number);

      if (
        factors.length ===
        expectedCount
      ) {
        return factors;
      }
    }
  }

  return factors;
}

/*
|--------------------------------------------------------------------------
| EXTRAÇÃO DE UMA FAIXA
|--------------------------------------------------------------------------
*/

function extractRange(
  sheet,
  table,
  side
) {
  const isGrouped =
    table.type === 'grouped';

  const colors =
    isGrouped
      ? GROUPED_COLORS
      : INDIVIDUAL_COLORS;

  const clarities =
    isGrouped
      ? GROUPED_CLARITIES
      : INDIVIDUAL_CLARITIES;

  /*
   * Número de fatores esperado
   * por coluna de pureza.
   */

  const expectedFactors =
    colors.length;

  /*
   * Colunas:
   *
   * Agrupadas:
   * esquerda B:I
   * direita  K:R
   *
   * Individuais:
   * esquerda B:L
   * direita  N:X
   *
   * Índices são zero-based.
   */

  let startColumn;

  if (isGrouped) {
    startColumn =
      side === 'left'
        ? 1
        : 10;
  } else {
    startColumn =
      side === 'left'
        ? 1
        : 13;
  }

  const caratRange =
    table[side];

  const entries = [];

  for (
    let clarityIndex = 0;
    clarityIndex <
    clarities.length;
    clarityIndex += 1
  ) {
    const columnIndex =
      startColumn +
      clarityIndex;

    const factors =
      collectFactors(
        sheet,
        columnIndex,
        table.rowStart,
        expectedFactors
      );

    if (
      factors.length !==
      expectedFactors
    ) {
      throw new Error(
        [
          `Falha na extração.`,
          `Aba: ${table.sheet}.`,
          `Faixa: ${caratRange.minCarat}-${caratRange.maxCarat}.`,
          `Pureza: ${clarities[clarityIndex]}.`,
          `Esperados: ${expectedFactors}.`,
          `Encontrados: ${factors.length}.`,
        ].join(' ')
      );
    }

    for (
      let colorIndex = 0;
      colorIndex <
      colors.length;
      colorIndex += 1
    ) {
      entries.push({
        minCarat:
          caratRange.minCarat,

        maxCarat:
          caratRange.maxCarat,

        color:
          colors[colorIndex],

        clarity:
          clarities[
            clarityIndex
          ],

        factor:
          factors[colorIndex],
      });
    }
  }

  return entries;
}

/*
|--------------------------------------------------------------------------
| VALIDAÇÃO
|--------------------------------------------------------------------------
*/

function validateEntries(
  entries
) {
  const expectedTotal = 1560;

  if (
    entries.length !==
    expectedTotal
  ) {
    throw new Error(
      [
        'Quantidade total inválida.',
        `Esperado: ${expectedTotal}.`,
        `Encontrado: ${entries.length}.`,
      ].join(' ')
    );
  }

  const keys = new Set();

  for (
    const entry of entries
  ) {
    if (
      !Number.isFinite(
        entry.factor
      ) ||
      entry.factor <= 0
    ) {
      throw new Error(
        `Fator inválido: ${JSON.stringify(
          entry
        )}`
      );
    }

    const key = [
      entry.minCarat,
      entry.maxCarat,
      entry.color,
      entry.clarity,
    ].join('|');

    if (
      keys.has(key)
    ) {
      throw new Error(
        `Registro duplicado: ${key}`
      );
    }

    keys.add(key);
  }
}

/*
|--------------------------------------------------------------------------
| CSV
|--------------------------------------------------------------------------
*/

function toCsvLine(
  entry
) {
  return [
    entry.minCarat,
    entry.maxCarat,
    entry.color,
    entry.clarity,
    entry.factor,
  ].join(',');
}

/*
|--------------------------------------------------------------------------
| EXECUÇÃO
|--------------------------------------------------------------------------
*/

if (
  !fs.existsSync(INPUT_FILE)
) {
  console.error(
    '\nArquivo de origem não encontrado:\n'
  );

  console.error(
    INPUT_FILE
  );

  process.exit(1);
}

console.log('');
console.log(
  '========================================'
);
console.log(
  ' EXTRAÇÃO DA BASE DE BRILHANTES'
);
console.log(
  '========================================'
);
console.log('');

console.log(
  `Lendo:\n${INPUT_FILE}\n`
);

const workbook =
  XLSX.readFile(
    INPUT_FILE,
    {
      raw: true,
      cellDates: false,
    }
  );

const allEntries = [];

for (
  const table of TABLES
) {
  const sheet =
    workbook.Sheets[
      table.sheet
    ];

  if (!sheet) {
    throw new Error(
      `A aba "${table.sheet}" não existe no Excel.`
    );
  }

  console.log(
    `Processando ${table.sheet}...`
  );

  const leftEntries =
    extractRange(
      sheet,
      table,
      'left'
    );

  const rightEntries =
    extractRange(
      sheet,
      table,
      'right'
    );

  allEntries.push(
    ...leftEntries,
    ...rightEntries
  );

  console.log(
    `  ${table.left.minCarat}-${table.left.maxCarat}: ${leftEntries.length} registros`
  );

  console.log(
    `  ${table.right.minCarat}-${table.right.maxCarat}: ${rightEntries.length} registros`
  );
}

console.log('');
console.log(
  'Validando base...'
);

validateEntries(
  allEntries
);

console.log(
  'Validação concluída.'
);

const csvLines = [
  'minCarat,maxCarat,color,clarity,factor',

  ...allEntries.map(
    toCsvLine
  ),
];

fs.writeFileSync(
  OUTPUT_FILE,
  `${csvLines.join('\n')}\n`,
  'utf8'
);

console.log('');
console.log(
  '========================================'
);

console.log(
  ' EXTRAÇÃO CONCLUÍDA'
);

console.log(
  '========================================'
);

console.log('');

console.log(
  `Registros: ${allEntries.length}`
);

console.log(
  'Faixas: 18'
);

console.log(
  `Linhas CSV: ${csvLines.length}`
);

console.log('');

console.log(
  `Arquivo gerado:\n${OUTPUT_FILE}`
);

console.log('');