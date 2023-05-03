import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = (props) => {
    const {key, id, name, image, genres }= props;
    return (
        <Link to={`/detail/${id}`}>
        <div className={style.cardContainer} key={key}>
            <p className={style.fontFamily}>{name}</p>
            <img src={image} alt={name} className={style.imagen} />
            <div>
                {genres.map((genre,index) => (
        <span key={index}>{genre}</span>
          ))}
            </div>
        </div>
        </Link>
    )
};

export default Card;