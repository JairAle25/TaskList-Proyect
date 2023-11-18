import { Trash } from 'react-bootstrap-icons';


const TaskItem = ({name,complete,id}) => {
    return ( 
        <>
         <tr>
            <td>{name}</td>
            <td><button className="pending completed">{complete}</button></td>
            <td><button className="basura"><Trash color="red" size={25}/></button></td>
        </tr>
        </>
     );
}
 
export default TaskItem;