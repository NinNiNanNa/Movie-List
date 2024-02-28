import React from "react";
import LoadImg from "../assets/img/loading.gif";

function Loading() {
  return (
    <div className="loading-wrap">
      <div className="loading">
        <h2>Loading...</h2>
        <img src={LoadImg} />
      </div>
    </div>
  );
}

export default Loading;
