import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import Operating from "@/components/Operating";
import Mesh from "@/components/Mesh";
import Reports from "@/components/Reports";
import Ticket from "@/components/Ticket";
import StatusFooter from "@/components/StatusFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#030712", color: "#f8fafc" }}>
      <div className="grain" />
      <StatusBar />
      <Navbar />
      <Hero />
      <div className="divider max-w-7xl mx-auto" />
      <Modules />
      <div className="divider max-w-7xl mx-auto" />
      <Operating />
      <div className="divider max-w-7xl mx-auto" />
      <Mesh />
      <div className="divider max-w-7xl mx-auto" />
      <Reports />
      <div className="divider max-w-7xl mx-auto" />
      <Ticket />
      <StatusFooter />
    </main>
  );
}
