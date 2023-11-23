import { Trash } from "react-bootstrap-icons";
import './TaskItem.css'

const TaskItem = ({ name, complete, id, handleChange, deleteTask }) => {
  return (
    <>
      
        <tr>
          <td>{name}</td>
          <td>
            <button
              className={complete ? "complete" : "pending"}
              onClick={() => handleChange(id)}
            >
              {complete ? "Completed" : "Pending"}
            </button>
          </td>
          <td>
            <button className="basura" onClick={() => deleteTask(id)}>
              <Trash color="red" size={25} />
            </button>
          </td>
        </tr>
      
    </>
  );
};

export default TaskItem;
