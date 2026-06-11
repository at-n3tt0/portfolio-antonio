import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Modules from "@/components/Modules";
import Audience from "@/components/Audience";
import Process from "@/components/Process";
import ProjectTypes from "@/components/ProjectTypes";
import WhyUs from "@/components/WhyUs";
import Ticket from "@/components/Ticket";
import StatusFooter from "@/components/StatusFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#090908", color: "#F5F5F5" }}>
      <Navbar />
      <Hero />
      <Pain />
      <Modules />
      <Audience />
      <Process />
      <ProjectTypes />
      <WhyUs />
      <div className="divider max-w-7xl mx-auto" />
      <Ticket />
      <StatusFooter />
    </main>
  );
}
