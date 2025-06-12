import About from "./components/Home/About";
import Counter from "./components/Home/Counter";
import Courses from "./components/Home/Courses";
import Hero from "./components/Home/Hero";
import Partners from "./components/Home/Partners";
import Service from "./components/Home/Service";
import Testimony from "./components/Home/Testimoy";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Courses />
      <Partners />
      <Counter />
      <Testimony />
    </div>
  );
}
