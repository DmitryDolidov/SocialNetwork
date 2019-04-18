import axios from "./axios-instance";

export const getOneFriendInformation = (friendId) => {
    let promise = axios.get(`profile/${friendId}`)
        .then(
            (result)=> {
                return result.data
            }
        )
    return promise
}

export const getOneFriendStatus = (friendId) => {
    let promise = axios.get(`profile/status/${friendId}`)
        .then(
            (result) => {
                return result.data
            }
        )
    return promise
}