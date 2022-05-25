import { GET_PROFILES, DELETE_PROFILE, SEARCH_PROFILE_FOR_ID } from "../actions-types/actions-types"

const initialState = {
    listProfiles: [],
    profile: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PROFILES:
            return {
                ...state,
                listProfiles: action.payload
            }

        case SEARCH_PROFILE_FOR_ID:
            const profileAux = state.listProfiles.filter(elemento => {
                if(elemento.id === action.payload) return elemento
            })
            return {
                ...state,
                profile: profileAux[0]
            }
        
        case DELETE_PROFILE:
            return {
                ...state,
                listProfiles: state.listProfiles.filter(elemento => elemento.id !== action.payload)
            }
        default:
            return state
    }

}

export default reducer