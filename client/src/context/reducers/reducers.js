export const Reducer = (state,action) => {
    switch(action.type){
        case "LOGIN_START":
        return {
            user:null,
            isfetching:true,
            error:false,
        }
        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                isfetching:false,
                error:false,
        }
        case "LOGIN_FAILURE":
            return {
                user:null,
                isfetching:false,
                error:true
        }
        default:
            return state
    }
}