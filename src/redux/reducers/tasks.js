import * as types from "./../constants/ActionTypes";
const randomId = () => {
  return Math.floor(1 + Math.random() * 0x10000)
    .toString(16)
    .substring(1);
};
const generateID = () => {
  return (
    randomId() +
    randomId() +
    "-" +
    randomId() +
    "-" +
    randomId() +
    "-" +
    randomId() +
    "-" +
    randomId() +
    randomId()
  );
};
const findIndex = (tasks, id) => {
  let result = -1; //không tìm thấy sẽ là -1
  tasks.map((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};
const data = JSON.parse(localStorage.getItem("todoList"));
console.log(data);
const initialState = data ? data : []; // danh sách các item
const myReducer = (state = initialState, action) => {
  let id = ""
  let index = -1
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      console.log(action);
      const newTask = {
        id: generateID(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      state.push(newTask);
      localStorage.setItem("todoList", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      console.log(action);
      id = action.id;
      index = findIndex(state, id);
      console.log(index);
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem("todoList", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state,id)
      state.splice(index,1);
      localStorage.setItem("todoList", JSON.stringify(state));
      return [...state]
    default:
      return state;
  }
};
export default myReducer;
// import vào file index trong reducer
