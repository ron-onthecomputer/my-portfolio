export default function SocialIcons({ link, className }) {
  return (
    <>
      <div className="col">
        <a href={link} target="_blank">
          <i className={`bi ${className}`}></i>
        </a>
      </div>
    </>
  );
}

export const SocialIconsList = [
  {
    link: "https://github.com/ron-onthecomputer",
    className: "bi-github",
  },
  {
    link: "https://www.linkedin.com/in/ronald-rupiya-2b1921372/",
    className: "bi-linkedin",
  },
  {
    link: "mailto:nrupiya2@gmail.com",
    className: "bi-envelope-at-fill",
  },
];
