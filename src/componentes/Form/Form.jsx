import './Form.css'

const Form = ({onChage,onSubmit}) => {
    return ( 
    <>
        <form onSubmit={onSubmit}>
            <input type="text"  name='Name' placeholder="What would you like to do?" required onChange={onChage}/>
            <button>Add</button>
        </form>
    </> 
    );
}
 
export default Form;