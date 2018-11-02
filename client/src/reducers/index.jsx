import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import sign_up from "./reducer_sign_up"

const rootReducer = combineReducers({
  sign_up: sign_up
})

export default rootReducer
