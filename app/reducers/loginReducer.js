const login = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return Object.assign(state, {email: action.user.user, password: action.user.password})
    
        default:
            return state
    }
}