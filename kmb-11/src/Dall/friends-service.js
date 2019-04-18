import axios from "../Dall/axios-instance";

export const friendsService = {
    getUsers: (returnCount, currentPage) => {
        let promise = axios.get(`users?count=${returnCount}&page=${currentPage}`);
        let finalPromise = promise.then(
            (result) => {
                return result.data
            }
        )
        return finalPromise
    }
}