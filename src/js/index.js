//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="app d-flex justify-content-center">
			<div className="icon box">
				<i className="far fa-clock"></i>
			</div>
			<div className="counter box">{props.digitMillion % 10}</div>
			<div className="counter box">{props.digitHThousand % 10}</div>
			<div className="counter box">{props.digitThousands % 10}</div>
			<div className="counter box">{props.digithousands % 10}</div>
			<div className="counter box">{props.digithundreds % 10}</div>
			<div className="counter box">{props.digittens % 10}</div>
			<div className="counter box">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digittens: PropTypes.number,
	digithundreds: PropTypes.number,
	digithousands: PropTypes.number,
	digitThousands: PropTypes.number,
	digitHThousand: PropTypes.number,
	digitMillion: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const Million = Math.floor(counter / 1000000);
	const HThousand = Math.floor(counter / 100000);
	const TThousand = Math.floor(counter / 10000);
	const Thousand = Math.floor(counter / 1000);
	const hundred = Math.floor(counter / 100);
	const ten = Math.floor(counter / 10);
	const unit = Math.floor(counter / 1);
	ReactDOM.render(
		<SimpleCounter
			digitOne={unit}
			digittens={ten}
			digithundreds={hundred}
			digithousands={Thousand}
			digitThousands={TThousand}
			digitHThousand={HThousand}
			digitMillion={Million}
		/>,
		document.querySelector("#app")
	);
	console.log(
		Million % 10,
		HThousand % 10,
		TThousand % 10,
		Thousand % 10,
		hundred % 10,
		ten % 10,
		unit % 10
	);
	counter++;
}, 1000);
