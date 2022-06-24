import Graphic from "./Graphic";
import MonthExpenses from "./MonthExpenses";

function Spending() {
    return (
        <div className='spending-box'>
            <h2 className="spending-title">Spending - Last 7 days</h2>
            <Graphic />
            <hr className="division-ruler" />
            <MonthExpenses />
        </div>
    );
}

export default Spending;