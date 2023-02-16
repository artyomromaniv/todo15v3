import {AppActionsType, setAppError, SetAppErrorAT, setStatus} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, error : string) => {
    dispatch(setAppError(error))
    dispatch(setStatus('failed'))
}

export const handleServerAppError = <T>(dispatch: Dispatch<SetAppErrorAT>, data: ResponseType<T> ) => {
    if (data.messages.length) {
        dispatch(setAppError(data.messages[0]))
    } else {
        dispatch(setAppError('Some error'))
    }
}