import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../UI/button/button";
import { useState } from "react";
import "./NewExpense.css"

const NewExpence = ({ onNewExpenseAdd, children }) => {
  const [showForm, setShowForm] = useState(false);


  console.log(children);
  const showExpenceForm = async () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };
  console.log("Render");
  return (
    <div className="NewExpense">
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenceForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (<div className="buttonContainer">
<Button onClick={showExpenceForm} backgroundColor={"#4A026B"}>Add new expense</Button>
      </div>
         
      )}
    </div>
  );
};

export default NewExpence;
