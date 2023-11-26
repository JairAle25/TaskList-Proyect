import "./App.css";
import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [taskItem, setTaskItem] = useState({
    Id: "",
    Name: "",
    Complete: "Pending",
  });

  const onChange = (e) => {
    setTaskItem({ ...taskItem, [e.target.name]: e.target.value });
  };

  const addTask = (newTask) => {
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (taskItem.Name === "") {
      return;
    }
    const newTask = { ...taskItem, Id: uuidv4() };
    addTask(newTask);
    setTaskItem({
      Id: "",
      Name: "",
      Complete: "Pending",
    });
    e.target.reset();
  };

  return (
    <>
      <main>
        <section>
          <div className="h1-container">
            <h1>TODO List</h1>
          </div>
          <Form onChage={onChange} onSubmit={onSubmit}></Form>
          <TaskList taskList={taskList} setTaskList={setTaskList}></TaskList>
        </section>
      </main>
    </>
  );
}

export default App;
