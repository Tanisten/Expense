import { useState } from "react";
import Button from "../UI/button/button";
import FormInput from "../UI/formInput/formInput";
import  "./ExpenseForm.css"



const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  //Cancelbutton
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  //titleEvent
  const titleInputChangeHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  //priceEvent
  const priceInputChangeHandler = (event) => {
    const value = event.target.value;

    setPrice(value);
  };
  // dateEvent
  const dateInputChangeHandler = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      date,
      price,
    };
    props.onNewExpenseAdd(expenseData);
  };

  return (
    <form>
      <div className="firstContainer">
        <FormInput
          id="title"
          labelName="Title"
          inputType="text"
          placeholder="Type text"
          value={title}
          onChange={titleInputChangeHandler}
        />
        <FormInput
          id="price"
          labelName="Quantity"
          inputType="number"
          value={price}
          onChange={priceInputChangeHandler}
        />
      </div>

      <div className="secondContainer">
        <FormInput
          id="date"
          labelName="Date"
          inputType="date"
          placeholder="dd.mm.yyyy"
          value={date}
          onChange={dateInputChangeHandler}
        />
        
      </div>
      <div className="thirdContainer">
        <Button onClick={cancelHandler} backgroundColor={"#4A026B"}>Cancel</Button>
        <Button onClick={saveHandler} backgroundColor={"#4A026B"}>Save</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
