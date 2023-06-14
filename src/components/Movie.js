import React, { Component } from "react";
import style from "../styles/style.module.scss";

class CompMovie extends Component {
    render() {
        const { id, title, poster, director, year, genre } = this.props;
        return (
            <div key={id} className={style["movie-box"]}>
                <img src={poster} alt={title} className={style["movie-img"]} />
                <h4>{title}</h4>
                <div>
                    <span>{director}</span>
                    <span>{year}</span>
                </div>
                <p>{genre}</p>
            </div>
        );
    }
}

export default CompMovie;
