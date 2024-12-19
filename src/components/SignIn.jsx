import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../fonts/Satoshi-Light.otf";
import { saasButtons } from "../constants";
import SigninButton from "./SigninButton";

const SignIn = () => {
    const [saas, useSaas] = useState();
    return (
        <div>
            <section className="max-w-[672px] h-[600px] bg-white rounded-xl flex flex-col justify-around items-center p-4 shadow-sm border border-[#E9EAEB]">
                <div className="flex items-center font-light text-3xl gap-2 ">
                    <img src={logo} alt="logo" />
                    CodeAnt Ai
                </div>
                <div className="font-inter text-[32px] font-semibold">
                    Welcome to CodeAnt AI
                </div>
                <div className="font-inter text-xl font-semibold">
                    <button className="w-[300px] h-[60px] rounded-lg bg-[#1570EF] text-white">
                        SAAS
                    </button>
                    <button className="w-[300px] h-[60px] rounded-lg bg-[#E9EAEB]">
                        Self Hosted
                    </button>
                </div>
                <div className="border w-full"></div>
                <div>
                    {saasButtons.map((item) => (
                        <SigninButton
                            key={item.id}
                            icon={item.icon}
                            text={item.text}
                        />
                    ))}
                </div>
            </section>

            <div className="font-inter text-center mt-6">
                By signing up you agree to the{" "}
                <span className="font-semibold">Privacy Policy</span>.
            </div>
        </div>
    );
};

export default SignIn;
