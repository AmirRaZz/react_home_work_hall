import React from 'react'
import style from "../styles/style.module.scss";

const GroupC = ({ chairs, chairState }) => {
    const groupC = [];

    return (
        <div className={style["stage-c"]}>
            {chairs.forEach((chair) => {
                if (chair.section === "C") {
                    groupC.push(chair);
                }
            })}
            {groupC.map((chair) => (
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

export default GroupC