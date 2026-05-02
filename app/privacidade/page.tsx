export default function Privacidade() {
  return (
    <main
      className="min-h-screen px-6 py-20"
      style={{ background: "#030712", color: "#f8fafc" }}
    >
      <section className="mx-auto max-w-3xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "#f59e0b" }}>
          atnetto.tech
        </p>
        <h1 className="text-4xl font-bold">Politica de privacidade</h1>
        <p style={{ color: "#cbd5e1" }}>
          A atnetto.tech coleta apenas as informacoes necessarias para responder
          contatos comerciais, preparar diagnosticos e oferecer solucoes digitais
          como sites, sistemas, APIs, automacoes, landing pages e CRM simples.
        </p>
        <h2 className="text-xl font-semibold">Dados coletados</h2>
        <p style={{ color: "#94a3b8" }}>
          Podemos receber nome, empresa, telefone, e-mail, cidade e descricao da
          necessidade enviada por formulario, WhatsApp ou e-mail.
        </p>
        <h2 className="text-xl font-semibold">Uso dos dados</h2>
        <p style={{ color: "#94a3b8" }}>
          Os dados sao usados para contato comercial, qualificacao da demanda,
          envio de proposta e acompanhamento do atendimento. Nao vendemos listas
          nem compartilhamos dados com terceiros para spam.
        </p>
        <h2 className="text-xl font-semibold">Medicao e anuncios</h2>
        <p style={{ color: "#94a3b8" }}>
          Podemos usar Google Tag Manager, Google Analytics e Google Ads para
          medir cliques, formularios enviados e interacoes comerciais. Essas
          ferramentas ajudam a melhorar campanhas e experiencia do site.
        </p>
        <h2 className="text-xl font-semibold">Contato</h2>
        <p style={{ color: "#94a3b8" }}>
          Para solicitar remocao ou correcao de dados, entre em contato pelo
          WhatsApp comercial ou pelos canais oficiais da atnetto.tech.
        </p>
      </section>
    </main>
  );
}
