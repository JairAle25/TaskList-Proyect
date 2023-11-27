import "./Form.css";

const Form = ({ onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="What would you like to do?"
          required
          autoComplete="off"
          onChange={onChange}
        />
        <div className="underline"></div>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
