import React from "react";
import "./Article.css";
import geolocationIcon from "../images/geolocation-icon.png";

const Article = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
  isntEnd,
}) => {
  const formatedCountryText = location.toUpperCase().split("").join(" ");

  return (
    <>
      <div className="article--container">
        <div
          className="article--image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="article--data">
          <div className="article--geolocation_container">
            <img
              className="article--geolocation_icon"
              src={geolocationIcon}
              alt="geolocation icon"
            />
            <p className="article--country">{formatedCountryText} </p>
            <a
              className="article--geolocation_link"
              href={googleMapsUrl}
              target="blank"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="article--title">{title}</h1>
          <strong className="article--date">
            {startDate} - {endDate}
          </strong>
          <p className="article--description">{description}</p>
        </div>
      </div>
      {isntEnd && <hr />}
    </>
  );
};

export default Article;
