import MobileModal from "./MobileModal";
import navbarData from "./NavbarData";
import NavbarItems from "./NavbarItems";
export default function Navbar({ activeSection }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid position-fixed">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#mobileModal"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list modal-icon"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex text-center align-items-center justify-content-around mt-3">
              {navbarData.map((navitem) => {
                const isActive = activeSection === navitem.id;
                return (
                  <NavbarItems
                    id={navitem.name}
                    name={navitem.name}
                    className={`${navitem.className} ${
                      isActive ? "active" : ""
                    }`}
                    link={navitem.link}
                    current={navitem.current}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <MobileModal />
    </>
  );
}
