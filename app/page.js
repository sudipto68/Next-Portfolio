import Intro from "../components/Intro/intro";
import Tech from "../components/Tech/tech";
import Service from "../components/Services/service";
import Experience from "../components/Experience/Experience";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
  return (
    <section>
      <Intro />
      <Tech />
      <Service />
      <Experience />
      <Portfolio />
    </section>
  );
}
