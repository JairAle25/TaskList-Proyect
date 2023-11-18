import './TaskList.css'
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({taskList}) => {
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
                    {taskList.map((task)=>(
                        <TaskItem key={task.Id} name={task.Name} complete={task.Complete}></TaskItem>
                    ))}
                </tbody>
            </table>
        </>
     );
}
 
export default TaskList;