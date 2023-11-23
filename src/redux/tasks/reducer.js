// // Импортируем функцию композиции редюсеров
import { combineReducers } from "redux";
import { statusFilters } from "../filters/constants";

// // Код редюсеров tasksReducer и filtersReducer
const tasksInitialState = [
  { id: 0, text: "TODO 1", completed: true },
  { id: 1, text: "TODO 2", completed: true },
  { id: 2, text: "TODO 3", completed: false },
  { id: 3, text: "TODO 4", completed: false },
  { id: 4, text: "TODO 5", completed: false },
];

// Отвечает только за обновление свойства tasks
// Теперь значением параметра state будет массив задач
const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

// Отвечает только за обновление свойства filters
// Теперь значением параметра state будет объект фильтров
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
