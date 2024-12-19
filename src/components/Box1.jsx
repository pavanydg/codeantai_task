import React from "react";
import piechart from "../assets/piechart.svg";

const Box1 = () => {
    return (
        <div className="shadow-bottom w-fit rounded-3xl">
            <div className="w-64 h-40 flex flex-col font-inter border px-6 py-4 justify-between rounded-3xl shadow-box">
                <div className="flex justify-between items-center">
                    <div className="w-14 h-14 flex justify-center items-center rounded-full relative">
                        <div className="w-full h-full rounded-full bg-[#9D90FA] opacity-25"></div>
                        <img
                            className="absolute z-10"
                            src={piechart}
                            alt="Pie Chart"
                        />
                    </div>
                    <div>
                        <div className="font-extrabold text-[#0049C6] flex items-center">
                            ↑ 14%
                        </div>
                        <div>This week</div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-sm font-bold">Issues Fixed</div>
                    <div className="text-[32px] font-bold">500K+</div>
                </div>
            </div>
        </div>
    );
};

export default Box1;
