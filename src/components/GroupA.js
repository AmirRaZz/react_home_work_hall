import React from "react";
import style from "../styles/style.module.scss";

const GroupA = ({ chairs, chairState }) => {
    const groupA = [];

    return (
        <div className={style["stage-a"]}>
            {chairs.forEach((chair) => {
                if (chair.section === "A") {
                    groupA.push(chair);
                }
            })}
            {groupA.map((chair) => (
                <button
                    key={chair.number}
                    name={chair.number}
                    value={chair.state}
                    title={chair.price}
                    onClick={chairState}
                >
                    {chair.number}
                </button>
            ))}
        </div>
    );
};

export default (GroupA);
