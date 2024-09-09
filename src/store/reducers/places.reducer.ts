import placesData from '../../assets/places.json';

export interface Place {
    id: number;
    name: string;
    image: string;
    description: string;
    visited: boolean;
}

export interface RouteState {
    places: Place[]
}

const initialState: RouteState = {
    places: placesData
}

function placesReducer(state = initialState, action: any): RouteState {
    switch (action.type) {
        case "CHANGE_VISIT":
            return {
                ...state,
                places: state.places.map((place) => {
                    if (place.id === action.payload) {
                        return { ...place, visited: !place.visited }
                    }
                    return place
                })
            }
        default:
            return state;
    }
}

export default placesReducer;