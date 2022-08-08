import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import style from "../style.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={style.loading}>
          <h1>Loadings...</h1>
        </div>
      ) : (
        <table className={style.table}>
          <tr>
            <Movie
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              summary={movie.description_full}
              genres={movie.genres}
            />
          </tr>
        </table>
      )}
    </div>
  );
}
export default Detail;
