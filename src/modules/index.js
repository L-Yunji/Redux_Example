// 리듀서를 하나로 합쳐 줌
// combineReducers라는 유틸 함수 사용
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
