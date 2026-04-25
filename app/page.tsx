import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "#030712", color: "#f8fafc" }}
    >
      <Navbar />
      <Hero />
      <Servicos />
      <Sobre />
      <Projetos />
      <Contato />
    </main>
  );
}
