import SocialIcons from "./SocialIcons";
import { SocialIconsList } from "./SocialIcons";
import SvgCircles from "./SvgCircles";
import { SvgCirclesData } from "./SvgCircles";
export default function Home() {
  const text = ">> console.log(“Hello world!”),";
  return (
    <section id="home">
      <div className="main">
        <div className="svg-circles">
          {SvgCirclesData.map((circles) => {
            return (
              <SvgCircles
                key={circles.className}
                dimensions={circles.dimensions}
                className={circles.className}
                circle={circles.circle}
              />
            );
          })}
        </div>
        <div className="container main-info">
          <div className="row justify-content-around">
            <div className="col-lg-3 col-sm-6 col-md-4 info-left"></div>
            <div className="col-lg-6 col-sm-6 col-md-8 info-right">
              <p style={{ fontFamily: "Courier Prime" }}> {text}</p>
              <p className="h1 animate-fade-slide">
                I'm <span> Ronald Rupiya</span>
              </p>
              <p
                className="h2 fw-bold animate-fade-slide"
                style={{ fontFamily: "Montserrat" }}
              >
                Front-end Developer
              </p>
              <p className="lh-lg animate-fade-slide description">
                I'm a self motivated front-end developer, programmer and
                aspiring Full-stack developer. I am an eager individual ready to
                work and collaborate with great minds
              </p>
              <div className="buttons animate-fade-slide d-flex justify-content-around justify-content-lg-start">
                <a
                  href="#contact"
                  className="btn btn-contact p-3 my-3 mx-lg-2 "
                >
                  Contact<i class="bi bi-arrow-up-right-circle-fill"></i>
                </a>
                <a
                  href="https://drive.google.com/file/d/1Wmv7yEm2CB4nTGESNxG8cFGG6AcIQM7X/view?usp=sharing"
                  className="btn btn-download p-3 my-3 mx-lg-2"
                >
                  Download CV <i className="bi bi-chevron-right"></i>
                </a>
              </div>
              <div className="social-icons my-2 ">
                {SocialIconsList.map((icons, i) => {
                  return (
                    <SocialIcons
                      key={i}
                      link={icons.link}
                      className={icons.className}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <i className="bi bi-chevron-down d-none d-sm-block"></i>
      </div>
    </section>
  );
}
