const popular = (state = {
        lastFetch: {},
        currentPage: {},
    }, action) => {
        switch(action.type) {
            case 'FETCH_POPULAR':
                const newPopularState = { ...state };
                newPopularState.lastFetch = action.payload;
                return newPopularState;
            case 'GET_PAGE':
                const newPageState = { ...state };
                newPageState.currentPage = action.payload;
                return newPageState;
            default:
                return state
        }
}

const popularCache = (state = {}, action) => {
    switch(action.type) {
        case 'CACHE_POPULAR':
            return action.payload;
        default:
            return state;
    }
} 

const popularModal = (state = {open: false}, action) => {
    switch(action.type) {
        case 'OPEN_PHOTO_MODAL':
            return action.payload;
        case 'CLOSE_PHOTO_MODAL':
            return { open: false }
        default:
            return state;
    }
}

export { popular, popularCache, popularModal };
