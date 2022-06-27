import React, {useState, useEffect} from 'react';
import BarContainer from "./BarContainer";

function Graphic(){
    const [data,setData] = useState([]);
    let min = Infinity; 
    let max = -Infinity;
    const minBarHeight = 5;
    const maxBarHeight = 65;
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


    if(data && data.length > 0){
        data.forEach(day => {
            let val = parseInt(day.amount, 10);
            min = Math.min(min, val);
            max = Math.max(max, val);
        });
    }

    return (
        <div className="graph-container">
            {data && data.length > 0 && data.map((day, index) => {
                const val = parseInt(day.amount, 10);
                const actualHeight = minBarHeight + ((val - min) / (max - min)) * (maxBarHeight - minBarHeight)  + "%";
              
                return (
                    <BarContainer 
                        key={index} 
                        barData={"$"+day.amount} 
                        barDay={day.day}
                        currentDay={currentDay}
                        height={actualHeight} 
                    />
                );
            })}
        </div>
    );
}

export default Graphic;