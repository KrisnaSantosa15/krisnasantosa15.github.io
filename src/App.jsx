import { useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Preloader from "./components/Preloader";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Work from "./sections/Work";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Recognition from "./sections/Recognition";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden />
      <Preloader />
      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Recognition />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
