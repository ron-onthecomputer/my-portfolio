import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import stackData from "./StackData";
import StackItem from "./StackItem";

gsap.registerPlugin(ScrollTrigger);

export default function Stack() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".stack-item");

    // Set initial state
    gsap.set(items, { opacity: 0, y: 50 });

    items.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // when the top of the item hits 80% of viewport height
          end: "bottom 20%", // when the bottom hits 20% of viewport
          toggleActions: "play reverse play reverse",
          // markers: true, // Uncomment to debug
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about">
      <div className="stack">
        <div
          ref={containerRef}
          className="container row stack-main flex-column my-5"
        >
          <p className="h4 ms-5">My Stack</p>
          {stackData.map((item) => (
            <StackItem
              key={item.name}
              name={item.name}
              number={item.number}
              text={item.text}
              icons={item.icons}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
