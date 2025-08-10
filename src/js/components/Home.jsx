import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SecondsCounter";
import Button from "./Button";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<SimpleCounter/>
		</div>
	);
};

export default Home;