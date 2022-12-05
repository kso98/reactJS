import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseData = new Date(2022, 2, 23);
    const expenseTitle = 'EMI';
    const expenseAmount = 150.00;

    return (
        <div className="expense-item">
        <div>{expenseData.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;
