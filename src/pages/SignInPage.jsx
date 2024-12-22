import Box1 from "../components/Box1";
import Box2 from "../components/Box2";
import SignIn from "../components/SignIn";
import subtract from "../assets/Subtract.png";

const SignInPage = () => {
    return (
        <div className="flex w-full h-svh overflow-x-hidden">
            <div className="hidden w-1/2 relative container custom:flex">
                <div className="absolute top-[477px] left-[48%] z-10">
                    <Box1 />
                </div>
                <div className="absolute top-[320px] left-1/4 z-1">
                    <Box2 />
                </div>
                <img
                    className="absolute bottom-0"
                    src={subtract}
                    alt="frontimage"
                />
            </div>
            <div className="w-full custom:w-1/2 bg-[#FAFAFA] flex flex-col justify-center items-center p-4">
                <div className="">
                    <SignIn />
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
