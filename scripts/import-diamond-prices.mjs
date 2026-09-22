import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const INPUT_FILE = path.join(
  ROOT,
  'data',
  'diamond-prices.csv'
);

const OUTPUT_FILE = path.join(
  ROOT,
  'data',
  'diamond-prices.generated.json'
);

const VALID_COLORS = new Set([
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

  'D-F',
  'G-H',
  'I-J',
  'K-L',
  'M-N',
]);

const VALID_CLARITIES =
  new Set([
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

    'IF-VVS',
    'VVS',
    'VS',
  ]);

const VALID_RANGES = [
  [0.01, 0.03],
  [0.04, 0.07],
  [0.08, 0.14],
  [0.15, 0.17],
  [0.18, 0.22],
  [0.23, 0.29],

  [0.3, 0.39],
  [0.4, 0.49],
  [0.5, 0.69],
  [0.7, 0.89],
  [0.9, 0.99],

  [1, 1.49],
  [1.5, 1.99],
  [2, 2.99],
  [3, 3.99],
  [4, 4.99],
  [5, 5.99],
  [10, 10.99],
];

function normalizeNumber(
  value
) {
  if (
    typeof value !== 'string'
  ) {
    return Number(value);
  }

  return Number(
    value
      .trim()
      .replace(',', '.')
  );
}

function normalizeText(
  value
) {
  return String(value ?? '')
    .trim()
    .toUpperCase();
}

function rangeExists(
  minCarat,
  maxCarat
) {
  return VALID_RANGES.some(
    ([min, max]) =>
      Math.abs(
        min - minCarat
      ) < 0.000001 &&
      Math.abs(
        max - maxCarat
      ) < 0.000001
  );
}

function parseCsvLine(
  line
) {
  /*
   * Nosso CSV é simples:
   *
   * minCarat,maxCarat,color,clarity,factor
   *
   * Não há campos com vírgulas
   * internas ou texto complexo.
   */
  return line
    .split(',')
    .map((item) =>
      item.trim()
    );
}

function makeKey(
  entry
) {
  return [
    entry.minCarat,
    entry.maxCarat,
    entry.color,
    entry.clarity,
  ].join('|');
}

function validateEntry(
  entry,
  lineNumber
) {
  const errors = [];

  if (
    !Number.isFinite(
      entry.minCarat
    )
  ) {
    errors.push(
      'minCarat inválido'
    );
  }

  if (
    !Number.isFinite(
      entry.maxCarat
    )
  ) {
    errors.push(
      'maxCarat inválido'
    );
  }

  if (
    Number.isFinite(
      entry.minCarat
    ) &&
    Number.isFinite(
      entry.maxCarat
    ) &&
    entry.minCarat >
      entry.maxCarat
  ) {
    errors.push(
      'minCarat maior que maxCarat'
    );
  }

  if (
    Number.isFinite(
      entry.minCarat
    ) &&
    Number.isFinite(
      entry.maxCarat
    ) &&
    !rangeExists(
      entry.minCarat,
      entry.maxCarat
    )
  ) {
    errors.push(
      `faixa não reconhecida: ${entry.minCarat}-${entry.maxCarat}`
    );
  }

  if (
    !VALID_COLORS.has(
      entry.color
    )
  ) {
    errors.push(
      `cor inválida: ${entry.color}`
    );
  }

  if (
    !VALID_CLARITIES.has(
      entry.clarity
    )
  ) {
    errors.push(
      `pureza inválida: ${entry.clarity}`
    );
  }

  if (
    !Number.isFinite(
      entry.factor
    ) ||
    entry.factor <= 0
  ) {
    errors.push(
      `factor inválido: ${entry.factor}`
    );
  }

  if (
    errors.length > 0
  ) {
    throw new Error(
      [
        `Erro na linha ${lineNumber}:`,
        ...errors.map(
          (error) =>
            `  - ${error}`
        ),
      ].join('\n')
    );
  }
}

if (
  !fs.existsSync(INPUT_FILE)
) {
  console.error(
    '\nArquivo não encontrado:\n'
  );

  console.error(
    INPUT_FILE
  );

  console.error(
    '\nCrie data/diamond-prices.csv antes de executar.\n'
  );

  process.exit(1);
}

const raw =
  fs.readFileSync(
    INPUT_FILE,
    'utf8'
  );

const lines = raw
  .replace(/^\uFEFF/, '')
  .split(/\r?\n/)
  .map((line) =>
    line.trim()
  )
  .filter(Boolean);

if (
  lines.length < 2
) {
  console.error(
    'O CSV não possui dados.'
  );

  process.exit(1);
}

const header =
  lines[0]
    .split(',')
    .map((item) =>
      item.trim()
    );

const expectedHeader = [
  'minCarat',
  'maxCarat',
  'color',
  'clarity',
  'factor',
];

if (
  JSON.stringify(header) !==
  JSON.stringify(
    expectedHeader
  )
) {
  console.error(
    'Cabeçalho inválido.'
  );

  console.error(
    '\nEsperado:\n'
  );

  console.error(
    expectedHeader.join(',')
  );

  console.error(
    '\nRecebido:\n'
  );

  console.error(
    header.join(',')
  );

  process.exit(1);
}

const entries = [];

const seen =
  new Set();

for (
  let index = 1;
  index < lines.length;
  index += 1
) {
  const line =
    lines[index];

  const lineNumber =
    index + 1;

  const values =
    parseCsvLine(line);

  if (
    values.length !== 5
  ) {
    throw new Error(
      `Linha ${lineNumber}: esperado 5 colunas, recebido ${values.length}.`
    );
  }

  const [
    minCaratRaw,
    maxCaratRaw,
    colorRaw,
    clarityRaw,
    factorRaw,
  ] = values;

  const entry = {
    minCarat:
      normalizeNumber(
        minCaratRaw
      ),

    maxCarat:
      normalizeNumber(
        maxCaratRaw
      ),

    color:
      normalizeText(
        colorRaw
      ),

    clarity:
      normalizeText(
        clarityRaw
      ),

    factor:
      normalizeNumber(
        factorRaw
      ),
  };

  validateEntry(
    entry,
    lineNumber
  );

  const key =
    makeKey(entry);

  if (
    seen.has(key)
  ) {
    throw new Error(
      `Linha ${lineNumber}: combinação duplicada ${key}`
    );
  }

  seen.add(key);

  entries.push(entry);
}

entries.sort(
  (a, b) => {
    if (
      a.minCarat !==
      b.minCarat
    ) {
      return (
        a.minCarat -
        b.minCarat
      );
    }

    if (
      a.maxCarat !==
      b.maxCarat
    ) {
      return (
        a.maxCarat -
        b.maxCarat
      );
    }

    if (
      a.color !==
      b.color
    ) {
      return a.color.localeCompare(
        b.color
      );
    }

    return a.clarity.localeCompare(
      b.clarity
    );
  }
);

fs.writeFileSync(
  OUTPUT_FILE,
  JSON.stringify(
    entries,
    null,
    2
  ) + '\n',
  'utf8'
);

const ranges =
  new Map();

for (
  const entry of entries
) {
  const key =
    `${entry.minCarat}-${entry.maxCarat}`;

  ranges.set(
    key,
    (ranges.get(key) ?? 0) +
      1
  );
}

console.log(
  '\nImportação concluída.\n'
);

console.log(
  `Entradas válidas: ${entries.length}`
);

console.log(
  `Faixas presentes: ${ranges.size}`
);

console.log(
  '\nResumo:\n'
);

for (
  const [
    range,
    count,
  ] of ranges
) {
  console.log(
    `${range} ct → ${count} combinações`
  );
}

console.log(
  '\nArquivo gerado:\n'
);

console.log(
  OUTPUT_FILE
);

console.log('');