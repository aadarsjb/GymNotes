//lets us make new context 
import { createContext, useReducer } from 'react'

//new context and stored in the constant
export const WorkoutContext = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => 
                    w._id !== action.payload._id
                )
            }
        default:
            return state
    }
}

//provide context to our application tree
export const WorkoutContextProvider = ({ children }) => {
    //reducer
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })


    //Return template
    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}


