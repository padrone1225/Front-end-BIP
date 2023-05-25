import Button from "../components/Buttons/Button";

function Landing() {
  return (
    <div className="mx-24 bg-slate-500 h-screen relative">
      <div id="background" className="z-1 absolute -top-169 w-full">
        <div className="w-1216 h-253 bg-radial-gradiant m-auto"></div>
        <div id="cloud" className="relative mt-16">
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute top-0 left-436"
          />
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute top-0 right-449"
          />
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute scale-110 top-66 left-208"
          />
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute scale-130 top-64 right-235"
          />
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute scale-177 top-143 left-24"
          />
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute scale-177 top-138 right-24"
          />
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute scale-82 top-266 left-184"
          />
          <img
            src="images/landing/Cloud.png"
            alt="cloud"
            className="absolute top-262 right-160"
          />
        </div>
        <div className="rounded-full h-872 w-872 bg-linear-gradiant mt-282 p-1.5 mx-auto relative">
          <div className="rounded-full w-full h-full bg-slate-500 p-148">
            <div className="rounded-full bg-linear-gradiant h-full w-full p-1.5">
              <div className="rounded-full w-full h-full bg-slate-500 p-148"></div>
            </div>
          </div>
          <div className="rounded-full bg-white h-80 w-80 absolute left-89 top-89 shadow-drop-30"></div>
          <div className="rounded-full absolute top-78 right-152 h-28 w-28 bg-white p-4 shadow-drop-45">
            <div className="rounded-full h-full w-full bg-[#CBECFF]"></div>
          </div>
          <div className="rounded-full absolute top-286 left-8 h-28 w-28 bg-white p-4 shadow-drop-45">
            <div className="rounded-full h-full w-full bg-[#CBECFF]"></div>
          </div>
          <div className="rounded-full absolute top-218 -right-11 h-104 w-104 bg-white p-12 shadow-drop-30">
            <img src="images/landing/Jazwares.png" alt="Jaz" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center z-10 py-24">
        <img src="logo.svg" alt="logo" className="h-40" />
        <div className="flex items-center gap-12">
          <Button size="sm" variant="secondary" title="Login" />
          <Button size="sm" variant="secondary" title="Signup" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
