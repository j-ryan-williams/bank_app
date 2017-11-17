const GET_USER_INFO = "GET_USER_INFO";

let initialState = {
  data: undefined,
  fetching: false,
  errorMessage: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return Object.assign({}, state, { data: action.payload })
      default:
        return state
  }
}
