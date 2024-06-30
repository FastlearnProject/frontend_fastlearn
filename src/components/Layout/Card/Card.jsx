import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Card = ({
  titleCard,
  imageQuery,
  imageAltCard,
  imageTitleCard,
  textCard,
  btnCard,
}) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const API_KEY =
        "DMcR1jV6d2yENdBKABbANFaC1ECVei8b4iXMSNnskDUIP1RQPNz6wTZV";
      const url = `https://api.pexels.com/v1/search?query=${imageQuery}&per_page=1`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: API_KEY,
          },
        });

        if (response.data.photos.length > 0) {
          setImageUrl(response.data.photos[0].src.medium);
        } else {
          console.error("No images found for query:", imageQuery);
        }
      } catch (error) {
        console.error("Error fetching image from Pexels", error);
      }
    };

    fetchImage();
  }, [imageQuery]);

  return (
    <article className="card card-compact bg-base-100 shadow-xl m-4 max-w-max sm:w-3/12">
      <div className="card-body">
        <h2 className="card-title text-md">{titleCard}</h2>
        <figure className="image-container">
          <img src={imageUrl} alt={imageAltCard} title={imageTitleCard} />
        </figure>
        <p>{textCard}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary hover:bg-btn-pri hover:text-primary border-none">
            {btnCard}
          </button>
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  titleCard: PropTypes.string.isRequired,
  imageQuery: PropTypes.string.isRequired,
  imageAltCard: PropTypes.string.isRequired,
  imageTitleCard: PropTypes.string.isRequired,
  textCard: PropTypes.string.isRequired,
  btnCard: PropTypes.string.isRequired,
};

export default Card;
