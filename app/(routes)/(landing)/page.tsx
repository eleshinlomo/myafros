'use client'
import About from "@/app/(routes)/(features)/About";
import Contact from "@/app/(routes)/(features)/Contacts";
import Header from "@/app/(routes)/(features)/Header";
import Hero from "@/app/(routes)/(features)/Hero";
import Projects from "@/app/(routes)/(features)/Projects";
import Skills from "@/app/(routes)/(features)/Skills";


const Home = ()=> {
  return (
    <div className="" id='home'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home