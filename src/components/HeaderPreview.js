import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h2-tag">
        Hi, We're <br></br>
        <em className="pink-text">Sentinels</em>
        <br></br>Best web developer For You
      </h1>
      <p className="gray-text p-tag">Front End Development</p>
      <Link className="pink-text" to="/personal-portfolio/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeaderPreview;
