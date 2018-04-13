import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <p>Hello World: stateless component!</p>
        </div>
    );
};
export default App;
ReactDOM.render(<App/>, document.getElementById("app"));