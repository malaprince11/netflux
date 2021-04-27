import React, { useState, useEffect } from "react";
import axios from "../../controller/axios";
import requestys from "../../controller/request";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requestys.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };



  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerBtn">
          <button className="btn">Watch</button>
          <button className="btn">Add to my list</button>
        </div>
        <h2 className="bannerDescription">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="bannerFadeButton"></div>
    </header>
  );
}

export default Banner;
