import { TOGGLE_LANGUAGE, TOGGLE_THEME } from "../actions/actions";


export const initialState = {
    darkMode: localStorage.getItem("darkMode") === "true" || false,
    language: "en",
  };

const myReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case TOGGLE_THEME:{ 

            const newMode = !state.darkMode;
            localStorage.setItem("darkMode", newMode);
            return {
                ...state,
                darkMode: newMode
            };
            }
        
        case TOGGLE_LANGUAGE:
            return { ...state, language: state.language === "en" ? "tr" : "en" }
        default:
            return state;
        }
    }
export default myReducer;
