import axios from "../Dall/axios-instance";

export const profileService = {
    getProfileInformation: (userId) => {
        let promise = axios.get(`profile/${userId}`).then(result => {
            return result.data
        })
        return promise
    },
    editNewProfileData: (newData) => {
        let promise = axios.put("profile", newData).then(result => {
            return result
        })
        return promise
    },
    updatePhoto: (data) => {
        let promise = axios.post('profile/photo', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then (result => {
            return result.data
        })
        return promise
    }
}
