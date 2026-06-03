"use client";

import { ReactNode } from "react";

function BrowserChrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div
      className="w-full mono text-[10px] relative overflow-hidden"
      style={{
        background: "rgba(28,25,23,0.95)",
        border: "1px solid rgba(251,191,36,0.18)",
        boxShadow: "0 12px 40px -12px rgba(0,0,0,0.6)",
        borderRadius: 6,
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{
          borderBottom: "1px solid rgba(251,191,36,0.12)",
          background: "rgba(12,10,9,0.7)",
        }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
        <span
          className="flex-1 truncate px-2 py-0.5 ml-2 text-[10px]"
          style={{
            color: "#64748b",
            background: "rgba(12,10,9,0.6)",
            border: "1px solid rgba(251,191,36,0.08)",
            borderRadius: 3,
          }}
        >
          {url}
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function PMM() {
  const rows = [
    { id: "CT-2024-001", forn: "Construtora Marajó", valor: "R$ 142.800", st: "vigente" },
    { id: "CT-2024-002", forn: "TechSupp Ltda", valor: "R$ 38.500", st: "vigente" },
    { id: "CT-2024-003", forn: "Papelaria Norte", valor: "R$ 9.200", st: "renovar" },
    { id: "CT-2024-004", forn: "Auto Peças Pará", valor: "R$ 21.450", st: "vigente" },
    { id: "CT-2024-005", forn: "Limpeza Urbana", valor: "R$ 76.000", st: "encerrado" },
  ];
  return (
    <BrowserChrome url="sistema-pmm.marituba.local/contratos">
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#f59e0b" }}>contratos / lista</span>
        <span style={{ color: "#64748b" }}>5 / 312</span>
      </div>
      <div style={{ border: "1px solid rgba(251,191,36,0.1)" }}>
        <div
          className="grid grid-cols-[1.1fr_1.4fr_1fr_0.9fr] gap-2 px-2 py-1.5 text-[9px] uppercase tracking-wider"
          style={{
            color: "#475569",
            background: "rgba(12,10,9,0.5)",
            borderBottom: "1px solid rgba(251,191,36,0.08)",
          }}
        >
          <span>id</span><span>fornecedor</span><span>valor</span><span>status</span>
        </div>
        {rows.map((r, i) => {
          const color = r.st === "vigente" ? "#22c55e" : r.st === "renovar" ? "#f59e0b" : "#64748b";
          return (
            <div
              key={r.id}
              className="grid grid-cols-[1.1fr_1.4fr_1fr_0.9fr] gap-2 px-2 py-1.5 items-center"
              style={{
                color: "#cbd5e1",
                borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(251,191,36,0.05)",
              }}
            >
              <span style={{ color: "#f59e0b" }}>{r.id}</span>
              <span className="truncate">{r.forn}</span>
              <span style={{ color: "#94a3b8" }}>{r.valor}</span>
              <span style={{ color }}>● {r.st}</span>
            </div>
          );
        })}
      </div>
    </BrowserChrome>
  );
}

function ServerMonitor() {
  const servers = [
    { id: "srv-01", cpu: 38, mem: 62, st: "up" },
    { id: "srv-02", cpu: 71, mem: 48, st: "up" },
    { id: "srv-03", cpu: 22, mem: 81, st: "warn" },
    { id: "srv-04", cpu: 54, mem: 39, st: "up" },
  ];
  return (
    <BrowserChrome url="monitor.atnetto.tech/dashboard">
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#f59e0b" }}>infra / overview</span>
        <span style={{ color: "#22c55e" }}>● live · 30s</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {servers.map((s) => {
          const stColor = s.st === "up" ? "#22c55e" : "#f59e0b";
          return (
            <div
              key={s.id}
              className="p-2"
              style={{
                background: "rgba(12,10,9,0.6)",
                border: "1px solid rgba(251,191,36,0.1)",
              }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span style={{ color: "#cbd5e1" }}>{s.id}</span>
                <span style={{ color: stColor }}>● {s.st}</span>
              </div>
              <div style={{ color: "#475569" }}>cpu</div>
              <div className="h-1 mb-1" style={{ background: "rgba(245,158,11,0.1)" }}>
                <div className="h-full" style={{ width: `${s.cpu}%`, background: s.cpu > 70 ? "#f59e0b" : "#22c55e" }} />
              </div>
              <div style={{ color: "#475569" }}>mem</div>
              <div className="h-1" style={{ background: "rgba(245,158,11,0.1)" }}>
                <div className="h-full" style={{ width: `${s.mem}%`, background: s.mem > 70 ? "#f59e0b" : "#22c55e" }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-2 px-2 py-1" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
        <span style={{ color: "#f59e0b" }}>⚠ alert</span>{" "}
        <span style={{ color: "#cbd5e1" }}>srv-03 memory &gt; 80%</span>
      </div>
    </BrowserChrome>
  );
}

function NexLicense() {
  const lic = [
    { key: "NEX-7K3Q-22FX", client: "Cliente A", st: "active", exp: "2027-04-12" },
    { key: "NEX-2J9P-88WB", client: "Cliente B", st: "active", exp: "2026-12-01" },
    { key: "NEX-5R0L-XX17", client: "Cliente C", st: "expired", exp: "2026-03-15" },
  ];
  return (
    <BrowserChrome url="nexlicense.atnetto.tech/admin">
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#f59e0b" }}>licenses / active</span>
        <span style={{ color: "#22c55e" }}>● mp ok</span>
      </div>
      <div className="space-y-1.5">
        {lic.map((l) => {
          const color = l.st === "active" ? "#22c55e" : "#ef4444";
          return (
            <div
              key={l.key}
              className="px-2 py-1.5"
              style={{
                background: "rgba(12,10,9,0.6)",
                border: "1px solid rgba(251,191,36,0.1)",
              }}
            >
              <div className="flex items-center justify-between">
                <span style={{ color: "#f59e0b" }}>{l.key}</span>
                <span style={{ color }}>● {l.st}</span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <span style={{ color: "#94a3b8" }}>{l.client}</span>
                <span style={{ color: "#64748b" }}>exp {l.exp}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex items-center justify-between" style={{ color: "#475569" }}>
        <span>webhook → mercadopago</span>
        <span style={{ color: "#22c55e" }}>200 OK</span>
      </div>
    </BrowserChrome>
  );
}

function Sigma() {
  const mods = ["Protocolo", "Contratos", "Patrimônio", "Frotas", "RH", "Almoxarifado", "Compras", "Tributos"];
  return (
    <BrowserChrome url="sigma.marituba.local/home">
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#f59e0b" }}>módulos integrados</span>
        <span style={{ color: "#64748b" }}>RBAC</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {mods.map((m, i) => (
          <div
            key={m}
            className="px-2 py-3 text-center"
            style={{
              background: i % 3 === 0 ? "rgba(245,158,11,0.08)" : "rgba(12,10,9,0.6)",
              border: `1px solid rgba(251,191,36,${i % 3 === 0 ? 0.25 : 0.1})`,
              color: i % 3 === 0 ? "#f59e0b" : "#cbd5e1",
            }}
          >
            <div className="text-[9px] mb-1" style={{ color: "#475569" }}>0{i + 1}</div>
            {m}
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function ComControl() {
  const items = [
    { tag: "NB-0142", item: "Notebook Dell", loc: "Setor TI", resp: "M. Silva" },
    { tag: "MN-0089", item: "Monitor 24\"", loc: "Recepção", resp: "A. Costa" },
    { tag: "IM-0223", item: "Impressora HP", loc: "Almoxarifado", resp: "—" },
    { tag: "RT-0011", item: "Roteador MikroTik", loc: "Servidor", resp: "TI" },
  ];
  return (
    <BrowserChrome url="comcontrol.local/ativos">
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#f59e0b" }}>ativos / inventário</span>
        <span style={{ color: "#64748b" }}>4 / 487</span>
      </div>
      <div style={{ border: "1px solid rgba(251,191,36,0.1)" }}>
        <div
          className="grid grid-cols-[1fr_1.4fr_1.1fr_1fr] gap-2 px-2 py-1.5 text-[9px] uppercase tracking-wider"
          style={{
            color: "#475569",
            background: "rgba(12,10,9,0.5)",
            borderBottom: "1px solid rgba(251,191,36,0.08)",
          }}
        >
          <span>tag</span><span>item</span><span>local</span><span>resp.</span>
        </div>
        {items.map((it, i) => (
          <div
            key={it.tag}
            className="grid grid-cols-[1fr_1.4fr_1.1fr_1fr] gap-2 px-2 py-1.5 items-center"
            style={{
              color: "#cbd5e1",
              borderBottom: i === items.length - 1 ? "none" : "1px solid rgba(251,191,36,0.05)",
            }}
          >
            <span style={{ color: "#f59e0b" }}>{it.tag}</span>
            <span className="truncate">{it.item}</span>
            <span style={{ color: "#94a3b8" }}>{it.loc}</span>
            <span style={{ color: "#94a3b8" }}>{it.resp}</span>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function NetoAI() {
  return (
    <BrowserChrome url="escritorio.neto.ai/triagem">
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#f59e0b" }}>triagem · IA</span>
        <span style={{ color: "#22c55e" }}>● modelo: ativo</span>
      </div>
      <div className="space-y-1.5">
        <div className="px-2 py-1.5" style={{ background: "rgba(12,10,9,0.6)", border: "1px solid rgba(251,191,36,0.1)" }}>
          <div style={{ color: "#94a3b8" }}>
            <span style={{ color: "#475569" }}>cliente:</span> &quot;O sistema não está abrindo desde manhã&quot;
          </div>
          <div className="mt-1 flex items-center gap-1.5" style={{ color: "#f59e0b" }}>
            <span>↳ sugestão</span>
            <span style={{ color: "#cbd5e1" }}>verificar serviço apache + cache</span>
          </div>
        </div>
        <div className="px-2 py-1.5" style={{ background: "rgba(12,10,9,0.6)", border: "1px solid rgba(251,191,36,0.1)" }}>
          <div style={{ color: "#94a3b8" }}>
            <span style={{ color: "#475569" }}>cliente:</span> &quot;Preciso emitir relatório do mês&quot;
          </div>
          <div className="mt-1 flex items-center gap-1.5" style={{ color: "#f59e0b" }}>
            <span>↳ rota</span>
            <span style={{ color: "#cbd5e1" }}>/relatorios/mensal · auto-fill</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 py-1" style={{ color: "#475569" }}>
          <span>confiança média</span>
          <span style={{ color: "#22c55e" }}>92%</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

const map: Record<string, () => React.JSX.Element> = {
  "PMM-001": PMM,
  "PMM-002": Sigma,
  "MON-001": ServerMonitor,
  "NEX-001": NexLicense,
  "COM-001": ComControl,
  "NAI-001": NetoAI,
};

export default function ProjectMock({ id }: { id: string }) {
  const C = map[id];
  if (!C) return null;
  return <C />;
}
