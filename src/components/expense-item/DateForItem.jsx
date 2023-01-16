import "./DateForItem.css"


export const DateForItem = (props) => {
  //Month
  const newDate = new Date(props.date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[newDate.getMonth()];

  // Year
const year = newDate.getFullYear()
  // Day
  const date = newDate.getDate()
  return (
    <div className="DateDiv">
      <p className="month">{monthName}</p>
      <p className="year">{year}</p>
      <p className="day">{date}</p>
    </div>
  );
};
