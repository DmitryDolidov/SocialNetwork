import React from 'react';
import './Dialogs.css';
import Correspondent from "./CorrespondentComponent";
import {connect} from 'react-redux';
import {Route} from "react-router";
import DialogsMessage from "./DialogsMessage";
import {NavLink, withRouter} from "react-router-dom";
import DefaultDialogsMessage from "./DefaultDialogsMessage";
import {chooseDialogOnClickDispatch, chooseDialogOnUrlDispatch} from "../../Reducers/dialogPageReducer";

const Dialogs = (props) => {

    let idFromUrl = props.match.params.userId;
    let returnMessages = '';

    if (idFromUrl != props.currentCorresspondentId && idFromUrl) {
        props.chooseDialogOnUrl(idFromUrl);
    }

    if (props.currentCorresspondentId && idFromUrl) {
        returnMessages = props.dialogMessages[props.currentCorresspondentId].map((el) => {
            return (<DialogsMessage avatar={props.dialogCorrespondents[el.id].avatar}
                                    name={props.dialogCorrespondents[el.id].firstName} message={el.message}/>);
        });
    } else {
        returnMessages = <DefaultDialogsMessage/>;
    }
    let returnDialogCorrespondents = props.dialogCorrespondents.map((el) => {
        if (el.id !== 0) {
            return (<NavLink to={`/dialogs/${el.id}`}><Correspondent
                avatar={el.avatar} name={el.firstName} chooseDialog={props.chooseDialogOnClick}
                currentCorresspondentId={props.match.params.userId}
                correspondentId={el.id}/>
            </NavLink>)
        }
    });

    return (
        <div className={'dialogs-box'}>
            <div className={'dialogs-titul'}>
                Диалоги
            </div>
            <div className={"dialogs-content"}>
                <div className={"dialogs-users"}>
                    {returnDialogCorrespondents}
                </div>
                <div className={"dialogs-messages"}>
                    <Route path={'/dialogs/:userId?'} render={() => returnMessages}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dialogCorrespondents: state.dialogData.dialogCorrespondents,
        currentCorresspondentId: state.dialogData.currentCorresspondentId,
        dialogMessages: state.dialogData.dialogMessages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseDialogOnClick: (corresspondentId) => {
            dispatch(
                chooseDialogOnClickDispatch(corresspondentId)
            );
        },
        chooseDialogOnUrl: (corresspondentId) => {
            dispatch(
                chooseDialogOnUrlDispatch(corresspondentId)
            );
        }
    }
};

const ConnectedDialog = withRouter(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default ConnectedDialog;