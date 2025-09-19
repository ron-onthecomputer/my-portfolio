import { useEffect, useState } from "react";
import Home from "./Home";
import { menuItems, socialItems } from "./NavbarData";
import Stack from "./Stack";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";
import StaggeredMenu from "./StaggeredMenu";
function App() {
  const [activeSection, setActiveSection] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-content">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl="/images/logo.png"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
          <Home />
          <Stack />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
