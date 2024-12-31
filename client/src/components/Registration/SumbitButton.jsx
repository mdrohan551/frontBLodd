import React from 'react';
import UserStore from "../../store/userAuth.js";

const SumbitButton = (props) => {
    let {isFormSubmit} = UserStore();

    if (isFormSubmit === false) {
        return <button onClick={props.onClick} type="submt"
                       className={props.className}>{props.text}</button>
    } else {
        return (
            <div>
                <button disabled={true} className={`${props.className} `}>
                    <div className="spinner-border spinner-border-sm mx-2" role="status"></div>
                    processing...
                </button>
            </div>
        );
    }


};

export default SumbitButton;