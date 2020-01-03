//jshint esversion:6
//commmon js
// require('react')
// module.exports = {}
// export.varname = 10;

//es6
//export default test
//export var a = 10;
import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
// 	//first what to render
// 	//the element to be created is html
// 	React.createElement(
// 		'div',//actuall html element to be created
// 		{id:'test'},//properties,porps,id,class
// 		'This div is created using react ',//3rd

// 		React.createElement('input'),
// 		React.createElement('p',null,new Date().toLocaleDateString())
// 		),
// 	//where to render
// 	document.getElementById('react')

// 	)
// var test = (a,b) =>{

// };

// const renderer = () =>{
// 	document.getElementById("normal").innerHTML =
//     `<p>this is list <input></input></p> <p>${new Date().toLocaleTimeString()}</P>`;

// }

// setInterval(renderer,1000);


//jsx
// button h1 div
const lecture = 'of react jsx';

const element = <h1>This testing{lecture}</h1>;
ReactDOM.render(element, document.getElementById("jsx"));

//componenent creation
//two type of function base, class based

//function base 
//so that it can be reused
function Button(porps){//props bcoz to get value dynamically
	return <button type="submit">{porps.label}</button>//this is jsx

}
//this is also work but cannot be reused
// ReactDOM.render(<button type-"submit"></button>, document.getElementById("jsx"));
//Button function is called Button is actually components
ReactDOM.render(<Button label="save"/>, document.getElementById("jsx"));

//this is for cancel
ReactDOM.render(<Button label="cancel"/>, document.getElementById("jsxx"));
