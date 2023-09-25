import React from 'react';

const Card = (props) => {
	var temp =(((props.add.main.temp)-273.15)).toFixed(2) ;

  return (
	<div className="" >
		<div className="">
			<h1 className="">Name of City :{props.add.name}</h1>
			<h3>Temperature : {temp} <sup>0</sup>C</h3>
		{/* optional chaining method */}
			<h4>Country Code : {props.add.sys.country}</h4>
		</div>
	</div>
  );
}

export default Card;