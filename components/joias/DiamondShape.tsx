type DiamondShapeProps = {
  shape:
    | 'round'
    | 'oval'
    | 'emerald'
    | 'pear'
    | 'cushion'
    | 'princess';
  className?: string;
};

export default function DiamondShape({
  shape,
  className = '',
}: DiamondShapeProps) {
  if (shape === 'round') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <circle
          cx="60"
          cy="60"
          r="43"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M60 17L84 27L103 48L103 72L84 93L60 103L36 93L17 72L17 48L36 27Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.8"
        />

        <path
          d="M60 17V103M17 60H103M36 27L84 93M84 27L36 93"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.42"
        />

        <circle
          cx="60"
          cy="60"
          r="18"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.55"
        />
      </svg>
    );
  }

  if (shape === 'oval') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <ellipse
          cx="60"
          cy="60"
          rx="33"
          ry="48"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M60 12L79 23L92 45L92 75L79 97L60 108L41 97L28 75L28 45L41 23Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.76"
        />

        <path
          d="M60 12V108M28 60H92M41 23L79 97M79 23L41 97"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.4"
        />

        <ellipse
          cx="60"
          cy="60"
          rx="17"
          ry="25"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (shape === 'emerald') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M34 15H86L105 34V86L86 105H34L15 86V34L34 15Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M39 27H81L93 39V81L81 93H39L27 81V39L39 27Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.75"
        />

        <rect
          x="39"
          y="39"
          width="42"
          height="42"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.5"
        />

        <path
          d="M15 34L39 39M105 34L81 39M15 86L39 81M105 86L81 81"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.45"
        />
      </svg>
    );
  }

  if (shape === 'pear') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M60 10C60 10 95 45 95 72C95 94 79 108 60 108C41 108 25 94 25 72C25 45 60 10 60 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M60 10L76 46L95 72L60 108L25 72L44 46L60 10Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.72"
        />

        <path
          d="M44 46L76 46L60 108M25 72H95"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.4"
        />

        <path
          d="M60 34L73 60L60 83L47 60Z"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (shape === 'cushion') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M36 17C24 17 17 24 17 36V84C17 96 24 103 36 103H84C96 103 103 96 103 84V36C103 24 96 17 84 17H36Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M41 29C33 29 29 33 29 41V79C29 87 33 91 41 91H79C87 91 91 87 91 79V41C91 33 87 29 79 29H41Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.72"
        />

        <path
          d="M60 17V103M17 60H103M29 29L91 91M91 29L29 91"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.38"
        />

        <circle
          cx="60"
          cy="60"
          r="19"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.48"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="18"
        y="18"
        width="84"
        height="84"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M60 18L102 60L60 102L18 60L60 18Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.75"
      />

      <path
        d="M18 18L102 102M102 18L18 102M60 18V102M18 60H102"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.38"
      />

      <rect
        x="42"
        y="42"
        width="36"
        height="36"
        transform="rotate(45 60 60)"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.48"
      />
    </svg>
  );
}