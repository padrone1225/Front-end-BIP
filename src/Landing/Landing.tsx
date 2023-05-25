import Button from "../components/Buttons/Button";

function Landing() {
  return (
    <div className="mx-24 h-[1200rem]">
      <div id="hero" className="relative">
        <div id="background" className="z-1 absolute -top-169 w-full">
          <div className="w-1216 h-253 bg-radial-gradiant m-auto" />
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
            <div className="rounded-full w-full h-full bg-white p-148">
              <div className="rounded-full bg-linear-gradiant h-full w-full p-1.5 relative">
                <div className="rounded-full w-full h-full bg-white p-148" />
                <div className="rounded-full absolute top-8 left-167 h-28 w-28 bg-white p-4 shadow-drop-45">
                  <div className="rounded-full h-full w-full bg-[#CBECFF]" />
                </div>
              </div>
            </div>
            <div className="rounded-full bg-white h-80 w-80 absolute left-89 top-89 shadow-drop-30" />
            <img
              src="images/landing/nextbite.png"
              alt="next"
              className="absolute top-122 left-94"
            />
            <div className="rounded-full absolute top-78 right-152 h-28 w-28 bg-white p-4 shadow-drop-45">
              <div className="rounded-full h-full w-full bg-[#CBECFF]"></div>
            </div>
            <div className="rounded-full absolute top-286 left-8 h-28 w-28 bg-white p-4 shadow-drop-45">
              <div className="rounded-full h-full w-full bg-[#CBECFF]"></div>
            </div>
            <div className="rounded-full absolute top-218 -right-11 h-104 w-104 bg-white p-12 shadow-drop-30">
              <img src="images/landing/Jazwares.png" alt="Jaz" />
            </div>
            <div className="rounded-full absolute top-448 -left-37 w-82 h-82 shadow-drop-30 bg-white"></div>
            <img
              src="images/landing/TextEffect.png"
              alt="text"
              className="absolute top-456 -left-56"
            />
            <div className="rounded-full absolute top-448 -right-14 h-28 w-28 bg-white p-4 shadow-drop-45">
              <div className="rounded-full h-full w-full bg-[#CBECFF]"></div>
            </div>
            <div className="rounded-full absolute top-584 right-10 w-82 h-82 shadow-drop-30 bg-white"></div>
            <img
              src="images/landing/Sonic.png"
              alt="text"
              className="absolute top-595 right-5"
            />
          </div>
        </div>
        <div id="main" className="z-10 relative">
          <div className="flex justify-between items-center pt-24">
            <img src="logo.svg" alt="logo" className="h-40" />
            <div className="flex items-center gap-12">
              <Button size="sm" variant="secondary" title="Login" />
              <Button size="sm" variant="secondary" title="Signup" />
            </div>
          </div>
          <div className="pt-80 flex flex-col items-center justify-center w-full relative">
            <p className="font-bold font-bodyText text-P300 text-sm uppercase">
              we are bip
            </p>
            <h1 className="text-N500 text-4xl text-center font-headings font-extrabold pt-16 w-660">
              The all-in-one licensing solution
            </h1>
            <h1 className="text-O01 text-base font-bodyText tracking-[0.02rem] pt-32">
              An online marketplace that connects brands to licensees around the
              world.
            </h1>
            <div className="pt-56 flex gap-16">
              <Button title="Watch Video" variant="secondary" iconLeft="Play" />
              <Button
                title="Get Started"
                iconLeft="Right"
                viewBox="0 0 16 16"
              />
            </div>
            <img src="images/landing/Mockup.png" alt="mock" className="pt-88" />
            <div className="flex flex-col gap-32 items-center justify-center">
              <h3 className="text-N200 text-lg font-bold font-headings">
                Trusted by top brands
              </h3>
              <div className="flex gap-58">
                <img
                  src="images/landing/Brand1.jpg"
                  alt="brand"
                  className="object-none"
                />
                <img
                  src="images/landing/Brand2.jpg"
                  alt="brand"
                  className="object-none"
                />
                <img
                  src="images/landing/Brand3.jpg"
                  alt="brand"
                  className="object-none"
                />
                <img
                  src="images/landing/Brand4.jpg"
                  alt="brand"
                  className="object-none"
                />
                <img
                  src="images/landing/Brand5.jpg"
                  alt="brand"
                  className="object-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
