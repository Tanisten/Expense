import { useRef, useState } from "react";
import FormInput from "../UI/formInput/formInput";
import "./ExpenseForm.css";
import styled from "styled-components";



const ExpenseForm = (props) => {
  /* const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(""); */

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  //Cancelbutton
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
    props.saveHandler();
  };

   

  const saveHandler = (event) => {
    event.preventDefault();

    const titleValue = titleInputRef.current.value;
    const dateValue = dateInputRef.current.value;
    const priceValue = amountInputRef.current.value;
    if (titleValue === "") {
      titleInputRef.current.focus();
      titleInputRef.current.style.outline = "2px solid red";
    }
    if (priceValue === "") {
      amountInputRef.current.focus();
      amountInputRef.current.style.outline = "2px solid red";
    }
    if (dateValue === "") {
      dateInputRef.current.focus();
      dateInputRef.current.style.outline = "2px solid red";
    }

    const expenseData = {
      title: titleValue,
      date: new Date(dateValue),
      price: priceValue,
    };
    props.onNewExpenseAdd(expenseData);
    if (titleValue !== "" && priceValue !== "" && dateValue !== "") {
      props.saveHandler();
    }
  };

  const testRefHandler = (event) => {
    event.preventDefault();

    titleInputRef.current.focus();
  };

  return (
    <form>
      <div className="firstContainer">
        <FormInput
          id="title"
          labelName="Title"
          inputType="text"
          placeholder="Type text"
          /*  value={title}
          onChange={titleInputChangeHandler} */
          reference={titleInputRef}
        />
        <FormInput
          id="price"
          labelName="Quantity"
          inputType="number"
          /* value={price}
          onChange={priceInputChangeHandler} */
          reference={amountInputRef}
        />
      </div>

      <div className="secondContainer">
        <FormInput
          id="date"
          labelName="Date"
          inputType="date"
          placeholder="dd.mm.yyyy"
          /* value={date}
          onChange={dateInputChangeHandler} */
          reference={dateInputRef}
        />
      </div>
      <div className="thirdContainer">
        <button onClick={testRefHandler} backgroundColor={"#4A026B"}>
          Test Ref
        </button>
        <DeleteButton onClick={cancelHandler} backgroundColor={"#4A026B"}>
          Cancel
        </DeleteButton>
        <SaveButton onClick={saveHandler} backgroundColor={"#4A026B"}>
          Save
        </SaveButton>
      </div>
    </form>
  );
};

export default ExpenseForm;

const DeleteButton = styled.button`
  color: white;
  padding: 16px 18px;
  border: none;
  border-radius: 1vh;
  margin: 14px;
  background-color: red;
`;

const SaveButton = styled.button`
  color: white;
  padding: 16px 18px;
  border: none;
  border-radius: 1vh;
  margin: 14px;
  background-color: chartreuse;
`;
