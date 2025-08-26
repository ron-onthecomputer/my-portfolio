export default function StackItem({ number, name, text, icons }) {
  return (
    <>
      <div className="col stack-item">
        <div className="row stack-container">
          {" "}
          <div className={name}>
            <p className="h2 fw-light">
              {number}
              <br />
              {text}
            </p>
          </div>
          <div className="col-lg-8 stack-icons justify-content-center justify-content-md-start">
            <div className="row">
              {icons.map((icon, i) => (
                <div key={i} className="col icon-wrappers mx-2">
                  <img width="64" height="64" src={icon.src} alt={icon.alt} />
                  <p>{icon.iconName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
