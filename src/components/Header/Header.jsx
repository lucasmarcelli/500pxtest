import React from "react";
import "./Header.scss";

export default (props) => {
    const { location } = props;
    const onPopular = location.pathname === "/" || location.pathname.includes("popular")
    const text =  onPopular ? "Popular" : "Other";
    return <div className="header">
                <h1>{text}</h1>
            </div>
}
