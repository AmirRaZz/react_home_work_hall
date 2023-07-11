import React, { useEffect, useReducer, useState } from "react";
import style from "../styles/style.module.scss";
import GroupB from "./GroupB";
import GroupA from "./GroupA";
import GroupC from "./GroupC";
import GroupD from "./GroupD";
import axios from "axios";

const initState = {
    chairs: {},
    errorMessage: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "success":
            return { ...state, chairs: action.chairInfo };
        case "failed":
            return { ...state, errorMessage: action.error };
        default:
            return state;
    }
};

const Hall = () => {
    const [data, dispatch] = useReducer(reducer, initState);
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        axios
            .get("chairs.json")
            .then((response) => {
                dispatch({ type: "success", chairInfo: response.data });
            })
            .catch((error) => {
                dispatch({ type: "failed", error: error.message });
            });
    }, []);

    const chairState = (event) => {
        const price = event.target.title;
        const value = event.target.value;
        const button = event.target
        if (value === "unselected") {
            button.value = "selected";
            button.style.backgroundColor = "green";
            button.style.color = "white";
        } else if (value === "selected") {
            button.value = "reserve";
            button.style.backgroundColor = "orange";
        } else if (value === "reserve") {
            button.value = "chosen";
            button.style.backgroundColor = "red";
            setCount((prevCount) => prevCount + 1);
            setPrice((prevPrice) => parseInt(prevPrice) + parseInt(price));
        } else if (value === "chosen") {
            alert("already reserved.");
        }
    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Stage</h1>
            </div>
            <div className={style.status}>
                <span>Count: {count}</span>
                <span>Sum: {price}</span>
            </div>
            {data.chairs.length > 0 ? (
                <div className={style["container-fluid"]}>
                    <GroupB chairs={data.chairs} chairState={chairState} />
                    <GroupA chairs={data.chairs} chairState={chairState} />
                    <GroupC chairs={data.chairs} chairState={chairState} />
                    <GroupD chairs={data.chairs} chairState={chairState} />
                </div>
            ) : (
                <h1>{data.errorMessage}</h1>
            )}
        </div>
    );
};

export default Hall;
