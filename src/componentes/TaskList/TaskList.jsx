import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ taskList, setTaskList }) => {
  const handleChange = (id) => {
    const newList = taskList.map((task) => {
      if (task.Id === id) {
        return {
          ...task,
          Complete: task.Complete === "Pending" ? "Completed" : "Pending",
        };
      }
      return task;
    });
    setTaskList(newList);
    localStorage.setItem("taskList", JSON.stringify(newList));
  };

  const deleteTask = (id) => {
    const newList = taskList.filter((task) => task.Id !== id);
    setTaskList(newList);
    localStorage.setItem("taskList", JSON.stringify(newList));
  };

  return (
    <>
      <h2>TODO List</h2>
      <table>
        <thead>
          <tr>
            <th className="list">List</th>
            <th>Status</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task) => (
            <TaskItem
              key={task.Id}
              name={task.Name}
              complete={task.Complete === "Completed"}
              id={task.Id}
              handleChange={handleChange}
              deleteTask={deleteTask}
            ></TaskItem>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
