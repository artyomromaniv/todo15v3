export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type SetStatusType = ReturnType<typeof setStatus>
export type SetAppErrorAT = ReturnType<typeof setAppError>

export type AppActionsType = SetStatusType | SetAppErrorAT

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setStatus = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const)

export const setAppError = (error: null | string) => ({type:'APP/SET-ERROR',error } as const)

