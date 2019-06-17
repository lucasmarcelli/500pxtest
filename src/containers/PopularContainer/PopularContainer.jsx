import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import PhotoThumb from "../../components/PhotoThumb";
import Button from "../../components/Button";
import PopularActions from "../../redux/actions/popular";
import "./PopularContainer.scss";
import Modal from "../../components/Modal";


export default (props) => {
    const navPage = Number(props.match.params.page) || false;
    const dispatch = useDispatch();
    dispatch(PopularActions.getPage(navPage));
    const currentPage = useSelector(state => state.popular.currentPage);
    const modalOnClick = (id) => {
        dispatch(PopularActions.getPhotoModal(id));
    }
    const popularModal = useSelector(state => state.popularModal);
    const { open, details } = popularModal;

    const renderPage = currentPage.photos ? 
                       currentPage.photos.map(
                           ({ images, id }) => {
                                return <PhotoThumb 
                                    url={images[0].https_url} 
                                    key={`thumb-${id}`}
                                    onClick={() => modalOnClick(id)}
                                    />
                           }
                            ) 
                        : null;
    const buttonMax = Math.ceil(navPage/5) * 5;
    const renderButtons = [];
    if(!isNaN(buttonMax)){
        for (let i = 4; i >= 0; i-- ) {
            const val = buttonMax - i;
            renderButtons.push(<Button key={`button-${val}`} text={val} onClick={() => props.history.push(`/popular/${val}`)}/>);
        }
    }                
    return (
        <div className="wrapper">
            <Modal details={details} open={open} onClose={() => dispatch({type: 'CLOSE_PHOTO_MODAL'})} />
            <div className="popular-container">
                {renderPage}
            </div>
            <div className="buttons-container">
                <Button text="Back" onClick={() => props.history.push(`/popular/${navPage - 1}`)}/>
                {renderButtons}
                <Button text="Forward" onClick={() => props.history.push(`/popular/${navPage + 1}`)}/>
            </div>
        </div>
    )
}
