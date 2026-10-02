import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Beneficios from "./components/Beneficios";
import ComoFunciona from "./components/ComoFunciona";
import Testimonios from "./components/Testimonios";
import Precios from "./components/Precios";
import FAQ from "./components/FAQ";
import CapturaFinal from "./components/CapturaFinal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <TrustBar />
        <Beneficios />
        <ComoFunciona />
        <Testimonios />
        <Precios />
        <FAQ />
        <CapturaFinal />
      </main>
      <Footer />
    </>
  );
}
