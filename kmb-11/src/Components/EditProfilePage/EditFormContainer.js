import React from 'react'
import {reduxForm} from "redux-form";
import EditProfileForm from "./EditProfileForm";
import {connect} from "react-redux";
import {
    changeUpdatePhotoStatus, changeUpdatePhotoStatusCreator, editDataStatusCreator,
    editProfileDataThunk,
    getProfileInformationThunk,
    updatePhotoThunk
} from "../../Reducers/profilePageReducer";



class EditFormContainer extends React.Component {

    submit = (values) => {
        let newData = {
            aboutMe: values.redAboutMe,
            contacts: {
                facebook: values.redFacebook,
                github: values.redGitHub,
                instagram: values.redInstagram,
                mainlink: values.redMainLink,
                twitter: values.redTwitter,
                vk: values.redVk,
                website: values.redWebSite,
                youtube: values.redYoutube
            },
            lookingForAJob: values.redLookingForAJob,
            lookingForAJobDescription: values.redLookingForAJobDescription,
            fullName: values.redFullName
        }
        this.props.editProfileData(newData)
    }

    componentWillMount() {
        this.props.getProfileInformation()
    }

    componentWillUnmount() {
        if(this.props.updatePhotoStatus) {
            this.props.changeUpdatePhotoStatus(null, null)
        }

        if(this.props.editDataStatus) {
            this.props.changeEditDataStatus(null, null)
        }
    }

    render() {
        return <FormUnderRedux onSubmit={this.submit} {...this.props} />
    }

}

let FormUnderRedux = reduxForm({
    // a unique name for the form
    form: 'editProfile'
})(EditProfileForm)


const mapStateToProps = (state) => {

    return {
        initialValues: {
            redFullName: state.profileData.fullName,
            redLookingForAJobDescription: state.profileData.lookingForAJobDescription,
            redLookingForAJob: state.profileData.lookingForAJob,
            redAboutMe: state.profileData.aboutMe,
            redFacebook: state.profileData.contacts.facebook,
            redGitHub: state.profileData.contacts.github,
            redInstagram: state.profileData.contacts.instagram,
            redMainLink: state.profileData.contacts.mainLink,
            redTwitter: state.profileData.contacts.twitter,
            redVk: state.profileData.contacts.vk,
            redWebSite: state.profileData.contacts.website,
            redYoutube: state.profileData.contacts.youtube
        },
        enableReinitialize: true,
        updatePhotoStatus: state.profileData.updatePhotoStatus,
        updatePhotoErrorText: state.profileData.updatePhotoErrorText,
        editDataErrorText: state.profileData.editDataErrorText,
        editDataStatus: state.profileData.editDataStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProfileData: (newData) => {
            dispatch(editProfileDataThunk(newData))
        },
        getProfileInformation: () => {
            dispatch(getProfileInformationThunk())
        },
        update: (e) => {
            let file = e.target.files[0];
            if (file) {
                let data = new FormData();
                data.append('file', file);
                dispatch(updatePhotoThunk(data))
            }
        },
        changeUpdatePhotoStatus: (status, errorText) => {
            dispatch(changeUpdatePhotoStatusCreator(status, errorText))
        },
        changeEditDataStatus: (status, errorText) => {
            dispatch(editDataStatusCreator(status, errorText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFormContainer);
