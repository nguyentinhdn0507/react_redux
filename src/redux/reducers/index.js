import status from "./status"; // được lấy từ reducer status
import sort from "./sort"; // được lấy từ reducer sort
import tasks from "./tasks"; // được lấy từ reducer tasks
import isDisplayForm from "./isDisplayForm"; // được lấy từ reducer isDisplayForm
import { combineReducers } from "redux";
const myReducer = combineReducers({
  tasks, // tasks:tasks
  isDisplayForm
});

export default myReducer;
