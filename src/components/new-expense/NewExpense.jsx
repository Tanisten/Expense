import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../UI/button/button";
import { useState } from "react";
import "./NewExpense.css";
import Modal from "../UI/Modal";

const NewExpence = ({ onNewExpenseAdd, children }) => {
  const [showForm, setShowForm] = useState(false);

  console.log(children);
  const showExpenceForm = async () => {
    setShowForm((prevState) => {
      return !prevState;
    });
    setModalVisible(true);
  };
  const [isModalvisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible((prevState) => !prevState);
  };

  const saveHandler = () => {
    toggleModalVisibility();
  };
  return (
    <div className="NewExpense">
      {!isModalvisible && (
        <div className="buttonContainer">
          <Button onClick={showExpenceForm} backgroundColor={"#4A026B"}>
            Add new expense
          </Button>
        </div>
      )}
      {isModalvisible && (
        <>
          {isModalvisible ? (
            <Modal onClose={toggleModalVisibility}>
              <ExpenseForm
                saveHandler={saveHandler}
                onShowForm={showExpenceForm}
                onNewExpenseAdd={onNewExpenseAdd}
              />
            </Modal>
          ) : null}
        </>
      )}
    </div>
  );
};

export default NewExpence;
