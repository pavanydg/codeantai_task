import React from "react";

const SigninButton = ({icon,text}) => {
  return <div>
    <button className="w-[446px] h-14 flex items-center border border-[#D8DAE5] rounded-lg gap-2 justify-center mb-4">
        <img src={icon} alt=""/>
        <div>{text}</div>
    </button>
  </div>;
};

export default SigninButton;
