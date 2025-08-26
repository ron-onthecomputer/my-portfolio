import { useState } from "react";
import InputField, { FieldData } from "./InputField";
import SocialIcons from "./SocialIcons";
import { SocialIconsList } from "./SocialIcons";

export default function Contact() {
  const requiredFields = ["name", "email", "message"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact">
      <div className="container-fluid contact">
        <div className="contact-form container">
          <form
            action="https://formspree.io/f/xgvyayje"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="row d-flex justify-content-around align-content-center">
              <div className="contact-left col-md-6 text-center">
                <p className="h1 pt-2">Let's Connect</p>

                {FieldData.map((field) => {
                  const key = field.name.toLowerCase();
                  return (
                    <InputField
                      key={field.id}
                      field={field}
                      value={formData[key]}
                      onChange={handleChange}
                      showError={errors[key]}
                    />
                  );
                })}

                <div className="form-inputs">
                  <div className="form-floating my-4">
                    <textarea
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      name="message"
                      id="message"
                      placeholder=""
                      style={{ height: "120px" }}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <label htmlFor="message">Your Message</label>
                  </div>{" "}
                  <small
                    className="text-danger"
                    style={{
                      visibility: errors.message ? "visible" : "hidden",
                    }}
                  >
                    Field cannot be empty
                  </small>
                </div>
                <button type="submit" className="btn-submit p-3 my-3">
                  Submit <i className="bi bi-send"></i>
                </button>
              </div>

              <div className="contact-right col-md-5">
                <div className="social-icons my-2 w-100">
                  {SocialIconsList.map((icons) => (
                    <SocialIcons
                      key={icons.className}
                      link={icons.link}
                      className={icons.className}
                    />
                  ))}
                </div>
                <img src="src/paper-plane.svg" alt="paper-plane-svg" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
