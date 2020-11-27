const PERFUME_LOADED = 'perfume/PERFUME_LOADED';

const initialState = {
    perfume: [],
    loading: false
};

export const perfumeLoaded = (perfume) => {
    return {
        type: PERFUME_LOADED,
        payload: perfume
    }
}

const perfumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERFUME_LOADED: {
            return {...state, perfume: action.payload}
        }
        default:
            return state;
    }
};

export default perfumeReducer;