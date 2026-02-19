import Hero from "@/components/Hero";
import GaleriaSlider from "@/components/GaleriaSlider";
import Modalidades from "@/components/Modalidades";
import Horarios from "@/components/Horarios";
import Planos from "@/components/Planos";
import Professores from "@/components/Professores";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <GaleriaSlider />
      <Modalidades />
      <Horarios />
      <Planos />
      <Professores />
      <Sobre />
      <Contato />
    </>
  );
}
