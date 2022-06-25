import React, {useState, useEffect} from 'react';
import BarContainer from "./BarContainer";

function Graphic(){
    const [data,setData] = useState([]);
    const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
    const d = new Date();
    const currentDay = weekday[d.getDay()];

    function getData(){
        fetch('data.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
        .then(response => response.json())
        .then(myJson => setData(myJson));
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className="graph-container">
            {data && data.length > 0 && data.map((day, index) => {
                return (
                    <BarContainer 
                        key={index} 
                        barData={"$"+day.amount} 
                        barDay={day.day}
                        currentDay={currentDay} 
                    />
                );
            })}
        </div>
    );
}

export default Graphic;