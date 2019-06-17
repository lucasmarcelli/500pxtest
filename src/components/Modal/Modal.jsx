import React from "react";
import Button from "../Button";
import "./Modal.scss";

export default (props) => {
    const { open, details, onClose } = props;
    if(open) {
        const { stats } = details;
        const toRender = Object.keys(stats).map(k => {
            return <div className="stat" key={`${k}`}>
                <h5 className="stat-title">{k}:</h5>
                <h5 className="stat-val">{stats[k]}</h5>
            </div>
        });
        return <div className="modal">
                    <Button text="close" onClick={onClose} />
                    <div className="modal-image">
                        <img src={details.url}/>
                    </div>
                    <div className="modal-details">
                        <div className="user-details">
                            <img src={details.avatar.https}/>
                            <div className="detail-wrapper">
                                <h4 className="name">{details.name}</h4>
                                <h3 className="photographer">By: {details.photographer}</h3>
                                <h5 className="camera">Camera: {details.camera} </h5>
                            </div>
                        </div>
                        <div className="stat-details">
                            {toRender}
                        </div>
                    </div>
            </div>
    }
    return null;
}
