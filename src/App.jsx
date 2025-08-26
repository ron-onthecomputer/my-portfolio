import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Stack from "./Stack";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Home />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
