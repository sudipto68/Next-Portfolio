import Intro from "../components/Intro/intro";
import Tech from "../components/Tech/tech";
import Service from "../components/Services/service";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
  return (
    <section>
      <Intro />
      <Tech />
      <Service />
      <Portfolio />
    </section>
  );
}
