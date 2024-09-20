import React from 'react'

function WeatherDisplay(props) {
    const {data} = props;

    const tempStyle ={
        color: data.temperature > 20 ? "red" : "blue"
    };

  return (
    <div>
        <p>Temperature: <span style={tempStyle}>{data.temperature}</span></p>
        <p>conditions: {data.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;