
function MonthExpenses(){
    return (
        <div className="month-expenses-box">
            <p className="total-this-month__title">Total this month</p>
            <p className="total-this-month__money">$478.33</p>
            <div className="from-last-month">
                <p className="from-last-month__percentage">+2.4%</p>
                <p className="from-last-month__title">from last month</p>
            </div>
        </div>
    );
}

export default MonthExpenses;