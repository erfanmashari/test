import { useContext, useReducer } from "react"

export const themeContext = React.createContext({
    color: "blue"
})

export default function Page() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                state.count++;
                break;
            case "decrement":
                state.count--;
                break;
            default:
                return state;
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <themeContext.Provider value={{state, dispatch}}>
            <div>
            
            </div>
        </themeContext.Provider>
    )
}

function Child() {
    const { state, dispatch } = useContext(themeContext);

    return (
        <span>{state.count}</span>
    )
}
