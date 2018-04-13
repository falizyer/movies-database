import React from "react";
import ReactDOM from "react-dom";

// 1
// Stateless render
const ReactStateless = () => {
    return (
        <div>
            <p>Hello World: stateless component!</p>
        </div>
    );
};
ReactDOM.render(<ReactStateless/>, document.getElementById("app1"));

//2
//create element
const elem1 = React.createElement("p", {className: "p-class"}, "Hello world: create element");
const root = React.createElement("div", null, elem1);
ReactDOM.render(root, document.getElementById("app2"));

// 3
//ReactComponent
class ReactComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Hello World: react component!</p>
            </div>
        );
    }
}
ReactDOM.render(<ReactComponent/>, document.getElementById("app3"));

// 4
//pure render
ReactDOM.render((<p>Hello World: pure html</p>), document.getElementById("app4"));