import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
            <section
              id="section"
              style={{
                backgroundImage: `url(${movie.background_image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="wrap">
                <div className="gap">
                  <div className="container">
                    <div className="content">
                      <div>
                        <img src={movie.large_cover_image} />
                      </div>
                      <div>
                        <h2>{movie.title}</h2>
                        <h3>{movie.year}</h3>
                        <span>
                          {movie.runtime} min | {movie.genres}
                        </span>
                        <h4>⭐ {movie.rating}</h4>
                        <p>{movie.description_full}</p>
                        {movie.yt_trailer_code === "" ? (
                          <></>
                        ) : (
                          <iframe
                            src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default Detail;
