/* eslint-disable @next/next/no-img-element */

type LogoProps = { size?: number };

/** A — Monograma letra "a" (typographic) */
function LogoA({ size = 96 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ga" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#ga)" />
      <rect x="2" y="2" width="60" height="30" rx="14" fill="white" fillOpacity="0.08" />
      <path
        d="M 32 18 C 22 18, 16 25, 16 33 C 16 41, 22 48, 32 48 C 36 48, 39 47, 41 45 L 41 47 L 48 47 L 48 30 C 48 22, 42 18, 32 18 Z M 32 25 C 38 25, 41 28, 41 33 L 41 36 C 41 39, 37 41, 33 41 C 27 41, 24 38, 24 33 C 24 28, 27 25, 32 25 Z"
        fill="#1c1917"
      />
      <circle cx="50" cy="14" r="3" fill="#fefce8" />
    </svg>
  );
}

/** B — Constelação de nós (network/mesh) */
function LogoB({ size = 96 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gb)" />
      <rect x="2" y="2" width="60" height="30" rx="14" fill="white" fillOpacity="0.08" />
      {/* connections */}
      <g stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
        <line x1="20" y1="22" x2="44" y2="22" />
        <line x1="20" y1="22" x2="32" y2="46" />
        <line x1="44" y1="22" x2="32" y2="46" />
      </g>
      {/* nodes */}
      <g fill="#1c1917">
        <circle cx="20" cy="22" r="5" />
        <circle cx="44" cy="22" r="5" />
        <circle cx="32" cy="46" r="5" />
      </g>
      {/* inner highlight on top node */}
      <circle cx="44" cy="22" r="2" fill="#fefce8" />
    </svg>
  );
}

/** C — Pulso / heartbeat (live/operação) */
function LogoC({ size = 96 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gc)" />
      <rect x="2" y="2" width="60" height="30" rx="14" fill="white" fillOpacity="0.08" />
      {/* heartbeat pulse line */}
      <path
        d="M 10 32 L 20 32 L 24 22 L 30 42 L 36 18 L 42 38 L 46 32 L 54 32"
        stroke="#1c1917"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* dot end (active) */}
      <circle cx="54" cy="32" r="3.5" fill="#1c1917" />
    </svg>
  );
}

/** D — Camadas empilhadas (do servidor ao código) */
function LogoD({ size = 96 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gd" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gd)" />
      <rect x="2" y="2" width="60" height="30" rx="14" fill="white" fillOpacity="0.08" />
      {/* 3 stacked layers (perspective-ish) */}
      <g fill="#1c1917">
        {/* top layer */}
        <path d="M 32 14 L 50 22 L 32 30 L 14 22 Z" />
        {/* middle layer */}
        <path d="M 14 30 L 32 38 L 50 30 L 50 33 L 32 41 L 14 33 Z" opacity="0.85" />
        {/* bottom layer */}
        <path d="M 14 38 L 32 46 L 50 38 L 50 41 L 32 49 L 14 41 Z" opacity="0.7" />
      </g>
    </svg>
  );
}

export default function LogoPreview() {
  const options = [
    {
      letter: "A",
      name: "Monograma 'a'",
      desc: "Tipográfico, ownable. Como Vercel/Linear. Aposta no nome.",
      Component: LogoA,
    },
    {
      letter: "B",
      name: "Constelação de nós",
      desc: "Três pontos conectados — referência à mesh / arquitetura distribuída.",
      Component: LogoB,
    },
    {
      letter: "C",
      name: "Pulso / heartbeat",
      desc: "Linha de batimento — referência a 'sistemas no ar' / live ops.",
      Component: LogoC,
    },
    {
      letter: "D",
      name: "Camadas empilhadas",
      desc: "Isométrico — referência ao 'do servidor ao código' (stack).",
      Component: LogoD,
    },
  ];

  return (
    <main className="min-h-screen px-4 md:px-8 py-16" style={{ background: "#0c0a09", color: "#f5f5f4" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <div className="text-xs mb-3" style={{ color: "#f59e0b" }}>
            <span>/</span> Escolha do logo
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            4 conceitos pra você escolher
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#a8a29e" }}>
            Cada um mantém dark + amber, quadrado arredondado, mas com símbolo interno diferente.
            Me diz qual letra (A, B, C ou D) você curtiu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {options.map(({ letter, name, desc, Component }) => (
            <div
              key={letter}
              className="p-8 transition-transform hover:scale-[1.02]"
              style={{
                background: "rgba(28,25,23,0.5)",
                border: "1px solid rgba(251,191,36,0.12)",
                borderRadius: 16,
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Component size={96} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      color: "#f59e0b",
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                    }}
                  >
                    {letter}
                  </div>
                  <div
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: "#f5f5f4",
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                    }}
                  >
                    {name}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#a8a29e" }}>
                    {desc}
                  </p>
                </div>
              </div>

              {/* contexto: aparece no navbar */}
              <div
                className="mt-6 pt-5 flex items-center gap-2.5"
                style={{ borderTop: "1px solid rgba(251,191,36,0.1)" }}
              >
                <div style={{ transform: "scale(0.4)", transformOrigin: "left center", height: 26 }}>
                  <Component size={64} />
                </div>
                <span
                  className="font-bold tracking-tight text-base"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: "#f5f5f4",
                  }}
                >
                  atnetto<span style={{ color: "#f59e0b" }}>.</span>tech
                </span>
                <span className="text-xs ml-auto" style={{ color: "#78716c" }}>
                  ↑ como ficaria no navbar
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* sizes preview row */}
        <div
          className="p-8 mb-12"
          style={{
            background: "rgba(28,25,23,0.3)",
            border: "1px solid rgba(251,191,36,0.08)",
            borderRadius: 16,
          }}
        >
          <div className="text-xs mb-4" style={{ color: "#f59e0b" }}>/ Em tamanhos diferentes</div>
          <div className="space-y-6">
            {options.map(({ letter, Component }) => (
              <div key={letter} className="flex items-center gap-8">
                <span className="text-lg font-bold w-8" style={{ color: "#a8a29e" }}>
                  {letter}
                </span>
                <Component size={24} />
                <Component size={48} />
                <Component size={80} />
                <Component size={128} />
              </div>
            ))}
          </div>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #fb923c)",
            color: "#0c0a09",
            borderRadius: 9999,
          }}
        >
          ← Voltar pro site
        </a>
      </div>
    </main>
  );
}
