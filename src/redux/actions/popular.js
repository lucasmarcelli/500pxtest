import Axios from "axios";
import { API_URL } from "../../constants";

const fetchPopular = (page = 1, callPage = false) => async (dispatch) => {
    const res = await Axios.get(`${API_URL}/photos`, {
        params: {
            'consumer_key': process.env.REACT_APP_CONSUMER_KEY,
            'feature': 'popular',
            'page': page,
            'image_size': '3,5',
        }
    });
    dispatch({
        type: 'FETCH_POPULAR',
        payload: res.data
    });
    dispatch(cachePopular(page, res.data, callPage));
}

const cachePopular = (page, popular, callPage) => (dispatch, getState) => {
    const { popularCache } = getState();
    const upsert = {[page]: popular}
    const cache = {
        ...popularCache,
        ...upsert,
    }
    dispatch({
        type: 'CACHE_POPULAR',
        payload: cache
    });

    if(callPage) dispatch(getPage(page))
}

const getPage = (page = 1) => (dispatch, getState) => {
    const { popularCache = {} } = getState();
    if(popularCache[page]) {
        dispatch({
            type: 'GET_PAGE',
            payload: popularCache[page]
        })
    } else {
        dispatch(fetchPopular(page, true));
    }
   
}

const getPhotoModal = (id) => (dispatch, getState) => {
    const { popular } = getState();
    const { currentPage } = popular;
    const photoObject = currentPage.photos.find(el => el.id === id)
    const details = {
        url: photoObject.images[1].https_url,
        photographer: photoObject.user.fullname,
        avatar: photoObject.user.avatars.default,
        name: photoObject.name,
        camera: photoObject.camera,
        stats : {
            "Width": photoObject.width,
            "Height": photoObject.height,
            "ISO": photoObject.iso,
            "Aperture": photoObject.aperture,
            "Shutter Speed": photoObject.shutter_speed,
            "Views": photoObject.times_viewed,
        }
    };
    dispatch({
        type: "OPEN_PHOTO_MODAL",
        payload: {
            open: true,
            details: details,
        }
    })
}



export default { fetchPopular, cachePopular, getPage, getPhotoModal };
