export type EvaluationReference = {
  code: string;
  createdAt: string;
};

const CODE_CHARACTERS =
  'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function createRandomCode(
  length = 4
) {
  const values =
    new Uint32Array(length);

  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.getRandomValues ===
      'function'
  ) {
    crypto.getRandomValues(
      values
    );

    return Array.from(
      values,
      (value) =>
        CODE_CHARACTERS[
          value %
            CODE_CHARACTERS.length
        ]
    ).join('');
  }

  return Array.from(
    {
      length,
    },
    () =>
      CODE_CHARACTERS[
        Math.floor(
          Math.random() *
            CODE_CHARACTERS.length
        )
      ]
  ).join('');
}

function pad2(
  value: number
) {
  return String(
    value
  ).padStart(
    2,
    '0'
  );
}

export function createEvaluationReference(): EvaluationReference {
  const date =
    new Date();

  const year =
    String(
      date.getFullYear()
    ).slice(-2);

  const month =
    pad2(
      date.getMonth() + 1
    );

  const day =
    pad2(
      date.getDate()
    );

  const random =
    createRandomCode(4);

  return {
    code:
      `MM-${year}${month}${day}-${random}`,

    createdAt:
      date.toISOString(),
  };
}

export function formatEvaluationDate(
  createdAt: string
) {
  const date =
    new Date(
      createdAt
    );

  return new Intl.DateTimeFormat(
    'pt-BR',
    {
      dateStyle: 'short',
      timeStyle: 'medium',
    }
  ).format(date);
}