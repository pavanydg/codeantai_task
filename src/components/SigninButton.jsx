import React from "react";
import { useNavigate } from "react-router-dom";

const SigninButton = ({ icon, text }) => {
    const navigate = useNavigate();

    return (
        <div>
            <button
                className="w-[300px] md:w-[446px] h-14 flex items-center border border-[#D8DAE5] rounded-lg gap-2 justify-center mb-4 hover:bg-[#E9EAEB]"
                onClick={() => {
                    navigate('/dashboard')
                }}
            >
                <img src={icon} alt="" />
                <div>{text}</div>
            </button>
        </div>
    );
};

export default SigninButton;
