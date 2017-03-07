
export function Logins(state = { isLogged: false, user: "", blood: "" }, action) {
    switch (action.type) {
        case "LoginSuccess":
            {
                return {
                    isLogged: true,
                    user: action.user
                }
            }
        case "logout":
            {
                return {
                    isLogged: false,
                    user: {}
                }
            }
        case "blood":
            return {
                ...state,
                blood: action.blood
            }
        default:
            return state
    }
}