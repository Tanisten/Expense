import "./formInput.css"

const FormInput = ({labelName, id,placeholder,inputType, reference, ...rest}) => {
  return (
    <div className="container">
      <label htmlFor="name" className="label">{labelName}</label>
      <input className="input"
      id={id}
        placeholder={placeholder || "..."}
        name="name"
        type={inputType}
        ref={reference}
         
       {...rest}


      />
    </div>
  );
};

export default FormInput;
