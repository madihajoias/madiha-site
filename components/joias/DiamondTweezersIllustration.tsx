type DiamondTweezersIllustrationProps = {
  className?: string;
  showGuides?: boolean;
};

export default function DiamondTweezersIllustration({
  className = '',
  showGuides = true,
}: DiamondTweezersIllustrationProps) {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id="tweezersMetal"
          x1="110"
          y1="455"
          x2="410"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7B684C" />
          <stop offset="42%" stopColor="#C6A46D" />
          <stop offset="68%" stopColor="#E3CCA0" />
          <stop offset="100%" stopColor="#8F744D" />
        </linearGradient>

        <linearGradient
          id="diamondStroke"
          x1="190"
          y1="155"
          x2="365"
          y2="345"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#EAD8B8" />
          <stop offset="45%" stopColor="#B99154" />
          <stop offset="100%" stopColor="#87683D" />
        </linearGradient>

        <radialGradient
          id="diamondGlow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(278 246) rotate(90) scale(106)"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
          <stop offset="48%" stopColor="#EBD6B0" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#C7A87A" stopOpacity="0" />
        </radialGradient>

        <filter
          id="softGlow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="12" />
        </filter>

        <filter
          id="diamondShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="14"
            floodColor="#6F5735"
            floodOpacity="0.12"
          />
        </filter>
      </defs>

      {/* GLOW CENTRAL */}
      <circle
        cx="278"
        cy="246"
        r="104"
        fill="url(#diamondGlow)"
        filter="url(#softGlow)"
      />

      {/* GUIAS TÉCNICAS */}
      {showGuides && (
        <g opacity="0.48">
          <circle
            cx="278"
            cy="246"
            r="124"
            stroke="#C7A87A"
            strokeWidth="1"
            strokeDasharray="3 8"
          />

          <circle
            cx="278"
            cy="246"
            r="154"
            stroke="#C7A87A"
            strokeWidth="0.8"
            strokeDasharray="2 12"
            opacity="0.65"
          />

          <path
            d="M278 67V117"
            stroke="#C7A87A"
            strokeWidth="1"
          />

          <path
            d="M278 374V424"
            stroke="#C7A87A"
            strokeWidth="1"
          />

          <path
            d="M99 246H149"
            stroke="#C7A87A"
            strokeWidth="1"
          />

          <path
            d="M407 246H457"
            stroke="#C7A87A"
            strokeWidth="1"
          />

          <circle cx="278" cy="117" r="2.5" fill="#A17D4F" />
          <circle cx="278" cy="374" r="2.5" fill="#A17D4F" />
          <circle cx="149" cy="246" r="2.5" fill="#A17D4F" />
          <circle cx="407" cy="246" r="2.5" fill="#A17D4F" />
        </g>
      )}

      {/* PINÇA — BRAÇO SUPERIOR */}
      <path
        d="
          M90 450
          C145 406 188 369 221 336
          C238 319 249 304 258 286
        "
        stroke="url(#tweezersMetal)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="
          M94 456
          C151 411 194 374 227 341
          C241 327 253 311 263 291
        "
        stroke="#F0DFC0"
        strokeOpacity="0.48"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* PINÇA — BRAÇO INFERIOR */}
      <path
        d="
          M122 486
          C176 431 216 389 243 351
          C256 332 267 312 273 291
        "
        stroke="url(#tweezersMetal)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="
          M127 490
          C181 436 221 393 248 355
          C260 337 270 317 277 296
        "
        stroke="#F0DFC0"
        strokeOpacity="0.42"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* HASTE FINAL DA PINÇA */}
      <path
        d="M258 286L267 266"
        stroke="#8E744E"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M273 291L281 270"
        stroke="#8E744E"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* PONTAS DA PINÇA */}
      <path
        d="M267 266L252 254"
        stroke="#8E744E"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M281 270L298 258"
        stroke="#8E744E"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* DIAMANTE */}
      <g filter="url(#diamondShadow)">
        <circle
          cx="278"
          cy="246"
          r="74"
          fill="#FCFAF7"
          fillOpacity="0.42"
          stroke="url(#diamondStroke)"
          strokeWidth="2"
        />

        <path
          d="
            M278 172
            L319 188
            L349 219
            L352 258
            L328 294
            L294 317
            L262 317
            L228 294
            L204 258
            L207 219
            L237 188
            Z
          "
          stroke="url(#diamondStroke)"
          strokeWidth="1.2"
          opacity="0.92"
        />

        <path
          d="
            M278 172
            L278 320
            M204 246
            H352
            M237 188
            L319 294
            M319 188
            L237 294
          "
          stroke="#A17D4F"
          strokeWidth="0.9"
          opacity="0.5"
        />

        <path
          d="
            M278 196
            L310 210
            L325 246
            L307 280
            L278 296
            L249 280
            L231 246
            L246 210
            Z
          "
          stroke="#A17D4F"
          strokeWidth="0.9"
          opacity="0.58"
        />

        <path
          d="
            M278 196
            L325 246
            L278 296
            L231 246
            Z
          "
          stroke="#C3A575"
          strokeWidth="0.8"
          opacity="0.52"
        />

        <path
          d="
            M246 210
            L310 210
            L307 280
            L249 280
            Z
          "
          stroke="#D1B98D"
          strokeWidth="0.7"
          opacity="0.45"
        />

        <circle
          cx="278"
          cy="246"
          r="19"
          stroke="#A17D4F"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* REFLEXOS */}
        <path
          d="M246 202L264 186"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.75"
        />

        <path
          d="M303 282L317 268"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.52"
        />

        <circle
          cx="242"
          cy="225"
          r="3.5"
          fill="#FFFFFF"
          opacity="0.75"
        />
      </g>

      {/* CONTATO DA PINÇA COM A PEDRA */}
      <circle
        cx="252"
        cy="254"
        r="3.5"
        fill="#A17D4F"
      />

      <circle
        cx="298"
        cy="258"
        r="3.5"
        fill="#A17D4F"
      />

      {/* MARCAÇÕES EXTERNAS */}
      {showGuides && (
        <g>
          <path
            d="M278 117L278 144"
            stroke="#A17D4F"
            strokeWidth="1"
          />

          <path
            d="M407 246L376 246"
            stroke="#A17D4F"
            strokeWidth="1"
          />

          <path
            d="M278 374L278 346"
            stroke="#A17D4F"
            strokeWidth="1"
          />

          <path
            d="M149 246L179 246"
            stroke="#A17D4F"
            strokeWidth="1"
          />
        </g>
      )}

      {/* DETALHE TÉCNICO DA PINÇA */}
      <path
        d="M105 463L135 478"
        stroke="#A17D4F"
        strokeWidth="1"
        opacity="0.4"
      />

      <path
        d="M119 447L149 461"
        stroke="#A17D4F"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}