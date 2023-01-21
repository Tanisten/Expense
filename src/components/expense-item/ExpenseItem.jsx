import { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import { ConfirmDeleteModal } from "../UI/ConfirmDeleteModal";
import Modal from "../UI/Modal";
import { DateForItem } from "./DateForItem";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, price }) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalHandler = () => {
    setModalVisibility((prevState) => !prevState);
  };

  const confirmHandler = () => {
    //
    setModalVisibility(false);
  };
  return (
    <>
      {isModalVisible ? (
        <ConfirmDeleteModal onClose={toggleModalHandler} onConfirm={confirmHandler}/>
      ) : null}

      <div className="ExpenseItem">
        <div className="lowerdiv">
          <DateForItem date={date} />
          <p className="title">{title}</p>
        </div>

        <p className="price">$ {price},00</p>
        <button onClick={toggleModalHandler}>DELETE</button>
      </div>
    </>
  );
};

export default ExpenseItem;
