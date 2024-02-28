import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    // console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
            <section id="section1">
              <div className="slider-container">
                <Carousel>
                  {movies.map((movie) => (
                    <Carousel.Item key={movie.id}>
                      <img
                        className="slide-img"
                        src={movie.background_image}
                        alt={movie.title}
                      />
                      <div className="slide-content">
                        <h2>{movie.title}</h2>
                        <p>{movie.summary}</p>
                        <Link
                          to={`/movie/${movie.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <span className="detailBtn">GO DETAIL</span>
                        </Link>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </section>
            <section id="section2">
              <div className="wrap">
                <div className="gap">
                  <div className="container">
                    <h2 className="mainTitle">Movie List</h2>
                    <div className="line"></div>
                    <div className="movieList">
                      {movies.map((movie) => (
                        <Movie
                          key={movie.id}
                          id={movie.id}
                          coverImg={movie.medium_cover_image}
                          title={movie.title}
                          year={movie.year}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
