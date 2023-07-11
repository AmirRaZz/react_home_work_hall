import React from 'react'
import style from "../styles/style.module.scss";

const GroupB = ({ chairs, chairState }) => {
    const groupB = [];
    return (
        <div className={style["stage-b"]}>
            {chairs.forEach((chair) => {
                if (chair.section === "B") {
                    groupB.push(chair);
                }
            })}
            {groupB.map((chair) => (
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

export default GroupB