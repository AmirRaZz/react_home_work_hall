import React from 'react'
import style from "../styles/style.module.scss";

const GroupD = ({ chairs, chairState }) => {
    const groupD = [];
    return (
        <div className={style["stage-d"]}>
            {chairs.forEach((chair) => {
                if (chair.section === "D") {
                    groupD.push(chair);
                }
            })}
            {groupD.map((chair) => (
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

export default GroupD