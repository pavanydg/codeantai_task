import Box1 from "../components/Box1";
import Box2 from "../components/Box2";
import SignIn from "../components/SignIn";
import subtract from "../assets/Subtract.png";

const SignInPage = () => {
    return (
        <div className="flex w-full h-svh">
            <div className="w-1/2">
                <div className="absolute top-[477px] left-[377px] z-10">
                    <Box1 />
                </div>
                <div className="absolute top-[320px] left-[120px] z-1">
                    <Box2 />
                </div>
                <img
                    className="absolute bottom-0"
                    src={subtract}
                    alt="frontimage"
                />
            </div>
            <div className="w-1/2 bg-[#FAFAFA] flex justify-center items-center">
                <SignIn />
            </div>
        </div>
    );
};

export default SignInPage;
