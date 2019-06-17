import React from "react";
import "./PhotoThumb.scss";

export default (props) => {
    const { url, onClick } = props;
    return <div className="photo-thumb-container"> 
        <div className="hover-screen" onClick={onClick}>
            &nbsp;
        </div>
        <img src={url} />
    </div>
}
