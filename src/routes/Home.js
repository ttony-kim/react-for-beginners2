import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import style from "../style.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={style.loading}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <table className={style.table}>
            {movies.map((movie) => {
              return (
                <>
                  <tr>
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      coverImg={movie.medium_cover_image}
                      title={movie.title_long}
                      summary={movie.summary}
                      genres={movie.genres}
                    />
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
