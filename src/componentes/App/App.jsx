import "./App.css";
import Form from "../Form/Form";
import { Fragment } from "react";
import TaskList from "../TaskList/TaskList";
import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { CodeSlash } from "react-bootstrap-icons";


function App(){
    const [taskList,setTaskList]=useState([])
    const [taskItem,setTaskItem]=useState({
        Id:Math.random()*99999999999999,
        Name:"",
        Complete:"Pending"
    })

    const onChange=(e)=>{
        setTaskItem({...taskItem,[e.target.name]: e.target.value})
    }

    const addTask=(newTask)=>{
        setTaskList([...taskList,newTask]);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(taskItem.Name==""){
            return;
        }
        addTask(taskItem);
        setTaskItem({
            Id:Math.random()*99999999999999,
            Name:"",
            Complete:"Pending"
        })
    }
    

    return (
        <>
        <header>
            <div className="h1-container">
                <h1>TODO List</h1>
            </div>
            <Form onChage={onChange} onSubmit={onSubmit}></Form>
            <TaskList taskList={taskList}></TaskList>
        </header>
        </>
    )
}

export default App