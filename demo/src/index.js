import { React } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

const Person = () => {
    return (
        <div className="person">
            <h1 >Gabriel</h1>
            <p>Your Age: 28</p>
        </div>
    )
}

export default Person;

ReactDOM.render(<Person />, document.querySelector('#p1'));