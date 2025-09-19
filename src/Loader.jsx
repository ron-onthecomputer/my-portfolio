import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [loaderDisplay, setLoaderDisplay] = useState(getRandomWord());

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      onRepeat: () => {
        setLoaderDisplay(getRandomWord());
      },
    });

    tl.fromTo(
      ".loader h1",
      { opacity: 0, height: 0 },
      { opacity: 1, height: 100, duration: 1, ease: "power4.inOut" }
    );
    return () => tl.kill();
  }, []);

  return (
    <div className="loader">
      <h1>{loaderDisplay}</h1>
    </div>
  );
}
const loaderWords = ["Hello", "Bonjour", "Makadini", "Salibonani"];
function getRandomWord() {
  return loaderWords[Math.floor(Math.random() * loaderWords.length)];
}
