import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
