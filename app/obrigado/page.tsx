import Link from "next/link";

export default function Obrigado() {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-6"
      style={{ background: "#090908", color: "#F5F5F5" }}
    >
      <section className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "#FF9A00" }}>
          lead recebido
        </p>
        <h1 className="mt-4 text-4xl font-bold">Obrigado pelo contato</h1>
        <p className="mt-4" style={{ color: "#94a3b8" }}>
          Sua mensagem foi preparada para atendimento comercial da atnetto.tech.
          O proximo passo e entender sua necessidade e indicar a melhor solucao.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex px-6 py-3 font-semibold"
          style={{ background: "#FF9A00", color: "#090908" }}
        >
          Voltar ao site
        </Link>
      </section>
    </main>
  );
}
