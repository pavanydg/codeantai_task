import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../fonts/Satoshi-Light.otf";
import { saasButtons, selfhostedButtons } from "../constants";
import SigninButton from "./SigninButton";

const SignIn = () => {
    const [selectedOption, setSelectedOption] = useState("SAAS");

    return (
        <div>
            <section className="max-w-[450px] md:max-w-[672px] max-h-[550px] md:max-h-[600px] bg-white rounded-xl flex flex-col justify-around items-center shadow-sm border border-[#E9EAEB] p-5">
                <div className="flex flex-col items-center gap-5 py-4 md:py-9 mx-6">
                    <div className="flex items-center font-light text-2xl md:text-3xl gap-2 ">
                        <img src={logo} alt="logo" className="w-8 md:w-9" />
                        CodeAnt Ai
                    </div>
                    <div className="font-inter text-2xl md:text-[32px] font-semibold">
                        Welcome to CodeAnt AI
                    </div>
                    <div className="font-inter md:text-xl font-semibold flex">
                        <button
                            className={`w-[160px] md:w-[300px] h-[60px] rounded-lg  ${
                                selectedOption === "SAAS"
                                    ? "bg-[#1570EF] text-white"
                                    : "bg-[#E9EAEB] text-[#414651]"
                            }`}
                            onClick={() => {
                                setSelectedOption("SAAS");
                            }}
                        >
                            SAAS
                        </button>
                        <button
                            className={`w-[160px] md:w-[300px] h-[60px] rounded-lg  ${
                                selectedOption === "Self Hosted"
                                    ? "bg-[#1570EF] text-white"
                                    : "bg-[#E9EAEB] text-[#414651]"
                            }`}
                            onClick={() => {
                                setSelectedOption("Self Hosted");
                            }}
                        >
                            Self Hosted
                        </button>
                    </div>
                </div>
                <div className="w-full border"></div>
                <div className="h-[376px] flex pt-6 ">
                    {selectedOption == "SAAS" ? (
                        <div>
                            {saasButtons.map((item) => (
                                <SigninButton
                                    key={`saas-${item.id}`}
                                    icon={item.icon}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    ) : (
                        <div>
                            {selfhostedButtons.map((item) => (
                                <SigninButton
                                    key={`selfhosted-${item.id}`}
                                    icon={item.icon}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <div className="font-inter text-center text-sm md:text-base mt-6">
                By signing up you agree to the{" "}
                <span className="font-semibold">Privacy Policy</span>.
            </div>
        </div>
    );
};

export default SignIn;
