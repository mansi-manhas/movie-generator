import React, { useState, useEffect } from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
//import { useHarperDB } from "use-harperdb";

function getRandomNumForRange() {
  return Math.floor(Math.random() * 5000) + 1;
}

function Movie() {
  const [id, setId] = useState(157336);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [cover, setCover] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState([]);
  //const [website, setWebsite] = useState("");
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
        fetchbyId(id);
        setFirstRender(false);
    } else {
        const randomNum = getRandomNumForRange();
        fetchbyId(randomNum);
    }
  }, []);

  function fetchbyId(id) {
    let url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${process.env.REACT_APP_TMDB_KEY}`;
    fetchApi(url);
  }

  // the api request function
  function fetchApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // update state with API data
        if (data.poster_path) {
          setId(data.id);
          setTitle(data.original_title);
          setDescription(data.overview);
          //setWebsite(data.homepage);
          setGenres(data.genres);
          setRating(data.vote_average);
          setDate(data.release_date);
          setProductionCompanies(data.production_companies);
          setProductionCountries(data.production_countries);
          setCover(`https://image.tmdb.org/t/p/original/${data.poster_path}`);
        } else {
          alert("We couldn't find the best match for you. Try again!");
        }
      });
  }

  function refresh() {
    const randomNum = getRandomNumForRange();
    fetchbyId(randomNum);
  }

  //   let [data, loading, error, refresh] = useHarperDB({
  //     query: {
  //       operation: "sql",
  //       sql: "select * from collection.movie",
  //     },
  //     interval: 40000,
  //   });

  //   if (loading) {
  //     return <div>Loading ...</div>;
  //   }

  //if (data) {
  return (
    <>
      <div className="movie-cover">
        <div className="top-information">
          <h2 className="title">{title}
          <br/>
          <span className="year">{`Release Year: ${date.split("-")[0]}`}</span>
          </h2>
          <div className="circle">
            <div className="ratings">
              <span className="big-half">{rating}</span>/
              <span className="small-half">10</span>
            </div>
          </div>
        </div>
        {/* <div className="supporting-info">
          <span className="year">{`Release Year: ${date.split("-")[0]}`}</span>
        </div> */}
        <div className="image">
          <img src={cover} alt="Movie Cover Image" />
        </div>

        {/* <div className="genres">
          <ul className="movie-genres">
            {genres.map((genre, index) => {
              return (
                <li key={index}>
                  <span className="movie-genre-item">{genre.name}</span>
                </li>
              )
            })
            }
          </ul>
        </div> */}
        <div className="lower-information">
        <ul className="movie-genres">
            {genres.map((genre, index) => {
              return (
                <li key={index}>
                  <span className="movie-genre-item">{genre.name}</span>
                </li>
              )
            })
            }
          </ul>
          <p>{description}</p>

          <hr />
          <p>
            {" "}
            <FontAwesomeIcon icon={faStar} style={{color: "yellow"}} /> : {rating}
          </p>
          <hr />
          <p>
            {" "}
            <span style={{color: "yellow"}}>Production Countries:</span>
            {productionCountries.map((country, index) => {
                return (
                  <span key={index} className="writer">
                    {" "} - {country.name}
                  </span>
                );
              })}
          </p>
          <hr />
          <p>
          <span style={{color: "yellow"}}>Production Companies:</span>
            {productionCompanies.map((company, index) => {
                return (
                  <span key={index} className="director">
                    {" "} - {company.name}
                  </span>
                );
              })}
          </p>
          <hr />
          <div className="action-buttons">
            <button className="generate-movie-button" onClick={refresh}>
              GENERATE NEW MOVIE
            </button>
          </div>
        </div>
      </div>
    </>
  );
  //   } else {
  //     return (
  //       <div>
  //         Sorry No Data
  //         {error}
  //       </div>
  //     );
  //   }
}

export default Movie;
