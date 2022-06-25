import React, {useState} from 'react';

function BarContainer(props){
    const [isShown, setIsShown] = useState(false);
    const customStyle = {
        backgroundColor: ""
    };
    
    if (props.currentDay === props.barDay) {
        customStyle.backgroundColor = "var(--cyan)";
    }

    return (
        <div className="bar-container">
            {isShown && (
            <div className="bar-data">{props.barData}</div>
            )}
            <div 
                className="bar" 
                style={customStyle}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
            </div>
            <div className="bar-day">{props.barDay}</div>
        </div>
    );
}

export default BarContainer;