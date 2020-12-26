import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Cyberpunk 2077", "Top News - 254 readers")}
      {newsArticle("Cristiano Ronaldo", "Top News - 491 readers")}
      {newsArticle("Macbook Pro M1", "Top News - 967 readers")}
      {newsArticle("Covid 19", "Top News - 1027 readers")}
    </div>
  );
}

export default Widgets;
