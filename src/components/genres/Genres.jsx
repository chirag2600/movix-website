import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

function Genres({ data }) {
  const genres = useSelector((state) => state.home.genres);
  return (
    <div className="genres">
      {data?.map((genre) => {
        if (!genres[genre]?.name) return;
        return (
          <div key={genre} className="genre">
            {genres[genre].name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
