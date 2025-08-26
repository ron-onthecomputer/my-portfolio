export default function InputField({ field, value, onChange, showError }) {
  const { name, type, id } = field;

  return (
    <div className="form-inputs">
      <div className="form-floating">
        <input
          type={type}
          className={`form-control ${showError ? "is-invalid" : ""}`}
          name={name.toLowerCase()}
          id={id}
          placeholder=""
          value={value}
          onChange={onChange}
        />
        <label htmlFor={name}>{name}</label>
      </div>
      <small
        className="text-danger"
        style={{
          visibility: showError ? "visible" : "hidden",
        }}
      >
        Field cannot be empty
      </small>
    </div>
  );
}

export const FieldData = [
  { type: "text", name: "Name", id: "name" },
  { type: "email", name: "Email", id: "email" },
  { type: "text", name: "Company", id: "company" },
];
