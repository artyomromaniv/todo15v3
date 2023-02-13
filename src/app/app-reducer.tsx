export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type setStatusType = ReturnType<typeof setStatus>

const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setStatus = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const)

type ActionsType = setStatusType