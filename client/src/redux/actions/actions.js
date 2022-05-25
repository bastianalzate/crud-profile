import axios from "axios"

import { 
    DELETE_PROFILE,
    GET_PROFILES,
    SEARCH_PROFILE_FOR_ID
} from "../actions-types/actions-types"


// Acctions
export const getProfiles = () => {
    return (dispatch) => {
        axios("http://localhost:3001/getProfiles")
            .then(response => dispatch({
                type: GET_PROFILES, 
                payload: response.data
            }
        ))

    }
}

export const updateProfile = (data) => {
    axios.put("http://localhost:3001/updateProfile", data)
        .then(response => console.log(response))
}

export const createProfile = (data) => {
    axios.post("http://localhost:3001/createProfile", data)
        .then(response => console.log(response))
}

export const deleteProfile = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3001/deleteProfile?id=${id}`)
        .then(response => dispatch({
            type: DELETE_PROFILE,
            payload: id
        }))
    }
}

export const searchProfileForId = (id) => {
    return {
        type: SEARCH_PROFILE_FOR_ID,
        payload: id
    }
}