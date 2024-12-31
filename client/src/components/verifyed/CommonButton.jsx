import React from 'react';
import UserStore from "../../store/userAuth.js";

const CommonButton = (props) => {
    let {isUserSubmit} = UserStore();

    if (isUserSubmit === false) {
        return <button onClick={props.onClick} type="submit"
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

export default CommonButton;