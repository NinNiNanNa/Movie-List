import propTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, coverImg, title, year }) {
  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
      <div className="movie">
        <img src={coverImg} alt={title} />
        <h2 className={style.title}>{title}</h2>
        <span className={style.year}>{year}</span>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
};

export default Movie;
