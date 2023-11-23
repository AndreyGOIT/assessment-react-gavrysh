// Импортируем хук
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { deleteTask, toggleCompleted } from "../../redux/tasks/actions";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        className={css.checkbox}
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
