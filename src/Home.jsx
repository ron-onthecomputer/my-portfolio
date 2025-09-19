import SocialIcons from "./SocialIcons";
import { SocialIconsList } from "./SocialIcons";
import SvgCircles from "./SvgCircles";
import { SvgCirclesData } from "./SvgCircles";
import RotatingText from "./RotatingText";
import DecryptedText from "./DecryptedText";
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

              <p className="h1 animate-fade-slide" style={{ fontSize: "3rem" }}>
                I'm <span> Ngonidzashe Rupiya</span>
              </p>
              <p
                className="h2 fw-bold animate-fade-slide"
                style={{ fontFamily: "Montserrat" }}
              >
                <RotatingText
                  texts={["Front-end Devloper", "UI/UX Designer", "Programmer"]}
                  mainClassName="my-rotating-char-container p-2 p-md-2 overflow-hidden rounded "
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  elementLevelClassName="my-rotating-char p-0"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={4000}
                />
              </p>
              <DecryptedText
                text="I'm a self motivated front-end developer, programmer and 
                aspiring Full-stack developer. I am an eager individual ready to
                work and collaborate with great mind"
                animateOn="view"
                revealDirection="start"
                className="description"
                parentClassName="decrypt-text my-2"
                encryptedClassName="scrambling"
              />
              <div className="buttons animate-fade-slide d-flex justify-content-around justify-content-lg-start">
                <a
                  href="#contact"
                  className="btn btn-contact p-3 my-3 mx-lg-2 "
                >
                  Contact<i class="bi bi-arrow-up-right-circle-fill"></i>
                </a>
                <a
                  href="https://drive.google.com/file/d/1O0QpNeymWjaVZ2mUBGh4P49MrKKiAQWx/view?usp=drive_link"
                  target="_blank"
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
