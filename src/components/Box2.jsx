import React from "react";
import logo from "../assets/logo.svg";

const Box2 = () => {
    return (
        <div className="shadow-bottom w-fit rounded-3xl">
            <div className="w-[447px] h-44 flex flex-col font-inter border px-6 py-4 justify-between rounded-3xl shadow-box">
                <div className="flex items-center gap-1">
                    <img src={logo} alt="logo" width={28} height={28} />
                    <div className="text-lg font-bold">
                        AI to Detect & Autofix Bad Code
                    </div>
                </div>
                <div className="border inset-0 mb-2"></div>
                <div className="flex justify-between mb-3">
                    <div className="text-center">
                        <div className="text-lg font-bold">30+</div>
                        <div className="text-sm">
                            Language Support
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold">10K+</div>
                        <div className="text-sm">Developers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold">100K+</div>
                        <div className="text-sm">Hours Saved</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Box2;
