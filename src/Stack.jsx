import stackData from "./StackData";
import StackItem from "./StackItem";

export default function Stack() {
  return (
    <section id="about">
      <div className="stack">
        <div className="container row stack-main flex-column my-5">
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
