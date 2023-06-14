import React, { Component } from "react";
import style from "../styles/style.module.scss"

class NotFound extends Component {
    render() {
        return (
            <div className={style["found-box"]}>
                <h1>NotFound</h1>
            </div>
        );
    }
}

export default NotFound;
