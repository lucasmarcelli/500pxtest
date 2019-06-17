import React from "react";
import "./Button.scss";

export default (props) => {
    const { text, onClick } = props;
    return <button className="navigation-button" onClick={onClick}>{text}</button>
}
