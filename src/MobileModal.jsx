import { mobileNavbarData } from "./NavbarData";
import NavbarItems from "./NavbarItems";
export default function MobileModal() {
  return (
    <div
      className="modal modal-left"
      id="mobileModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm m-0">
        <div className="modal-content">
          <div className="modal-header">
            <i
              className="bi bi-x-circle-fill modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="modal-body">
            {mobileNavbarData.map((navitem) => {
              return (
                <NavbarItems
                  id={navitem.name}
                  name={navitem.name}
                  className={navitem.className}
                  link={navitem.link}
                  current={navitem.current}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
