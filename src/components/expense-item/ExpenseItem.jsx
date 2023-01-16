import { DateForItem } from "./DateForItem"
import "./ExpenseItem.css"

const ExpenseItem = ({date, title, price}) =>{
    return (
        <div  className="ExpenseItem">
           <div className="lowerdiv">
           <DateForItem date={date}/>
            <p className="title">{title}</p>
            </div> 
            
           <p className="price">$ {price},00</p>
        </div>
    )
}

export default ExpenseItem