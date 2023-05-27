import Button from "../components/Buttons/Button";

import resolveConfig from "tailwindcss/resolveConfig";
import * as tailwindConfig from "@tailwindConfig";

function Landing() {
  const fullConfig = resolveConfig(tailwindConfig);
  return (
    <>
      <div className="mx-24 overflow-hidden">
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
              <h1 className="text-N500 text-5xl text-center font-headings font-extrabold pt-16 w-660">
                The all-in-one licensing solution
              </h1>
              <h1 className="text-O01 text-md font-bodyText tracking-md pt-32">
                An online marketplace that connects brands to licensees around
                the world.
              </h1>
              <div className="pt-56 flex gap-16">
                <Button
                  title="Watch Video"
                  variant="secondary"
                  iconLeft="Play"
                />
                <Button
                  title="Get Started"
                  iconLeft="Right"
                  viewBox="0 0 16 16"
                />
              </div>
              <img
                src="images/landing/Mockup.png"
                alt="mock"
                className="pt-88"
              />
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
        <div id="work" className="relative mt-42 overflow-hidde z-10">
          <div id="background" className="absolute z-1 w-full">
            <div id="cloud" className="relative">
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-66 right-24 absolute scale-163"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-402 -left-67 absolute scale-197"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-538 left-155 absolute scale-90"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-402 -right-75 absolute scale-197"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-488 left-584 absolute"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-878 right-144 absolute scale-197"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-1038 right-66 absolute scale-140"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-1382 left-155 absolute scale-90"
              />
              <img
                src="images/landing/Cloud.png"
                alt="cloud"
                className="top-1710 left-24 absolute scale-205"
              />
            </div>
            <div className="[border-start-start-radius:6rem_6rem] border-t-1.5 border-l-1.5 border-O02 h-282 w-282 absolute top-388 left-376" />
            <div className="[border-start-start-radius:6rem_6rem] [direction:rtl] h-266 w-276 absolute top-900 right-372 border-t-1.5 border-r-1.5" />
          </div>
          <div id="main" className="z-50 relative">
            <h1 className="text-N200 text-3xl text-center font-bold font-headings tracking-md">
              How it works?
            </h1>
            <div className="grid grid-cols-2 gap-16 pt-96">
              <div className="pt-36 pl-104 flex items-start justify-center">
                <div className="flex items-center gap-16">
                  <h1 className="[-webkit-text-stroke:1.5px_#AEC1ED] text-extra text-transparent font-bold font-headings">
                    1
                  </h1>
                  <div className="flex flex-col gap-20">
                    <h2 className="text-N200 text-xl font-bold font-headings">
                      Sign Up
                    </h2>
                    <p className="text-md text-N100 font-botyText tracking-md">
                      Create an account on our platform as a licensee, licensor,
                      or agency to access our marketplace and services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-504 h-408 rounded-16 px-60 shadow-base-24 relative bg-white">
                <div className="flex items-center justify-between pt-48">
                  <img src="logo.svg" alt="logo" className="h-36" />
                  <h3 className="text-N200 text-lg font-bold font-headings">
                    Create an Account
                  </h3>
                </div>
                <div className="flex flex-col gap-20 pt-64">
                  <div className="w-384 h-48 rounded-12 bg-O03 py-22 pl-16 pr-152">
                    <div className="w-full bg-N75 rounded-16 h-4" />
                  </div>
                  <div className="w-384 h-48 rounded-12 bg-O03 py-22 pl-16 pr-240">
                    <div className="w-full bg-N75 rounded-16 h-4" />
                  </div>
                  <div className="w-384 h-48 rounded-12 bg-O03 py-22 pl-16 pr-276 flex gap-4">
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                    <div className="bg-N75 rounded-16 h-8 w-8" />
                  </div>
                </div>
                <div className="w-232 h-128 bottom-32 -right-32 rounded-16 shadow-base-30 bg-white absolute flex items-center justify-center">
                  <Button size="lg" title="Get Started" />
                </div>
              </div>
              <div className="w-504 h-408 rounded-16 shadow-base-24 bg-white mt-104 justify-self-end" />
              <div className="pt-122 pr-104 flex items-start justify-center">
                <div className="flex items-center gap-16">
                  <h1 className="[-webkit-text-stroke:1.5px_#AEC1ED] text-extra text-transparent font-bold font-headings">
                    2
                  </h1>
                  <div className="flex flex-col gap-20">
                    <h2 className="text-N200 text-xl font-bold font-headings">
                      Find a match
                    </h2>
                    <p className="text-md text-N100 font-botyText tracking-md">
                      List your brand or browse our marketplace to find the
                      perfect licensing match for your company needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-128 pl-104 flex items-start justify-center">
                <div className="flex items-center gap-16">
                  <h1 className="[-webkit-text-stroke:1.5px_#AEC1ED] text-extra text-transparent font-bold font-headings">
                    3
                  </h1>
                  <div className="flex flex-col gap-20">
                    <h2 className="text-N200 text-xl font-bold font-headings">
                      Connect and negotiate
                    </h2>
                    <p className="text-md text-N100 font-botyText tracking-md">
                      Connect with other companies directly through our platform
                      by sending a custom deal pitch. Negotiate the license
                      terms until you both reach an agreement in our chat room.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-504 h-408 rounded-16 px-60 shadow-base-24 bg-white mt-88" />
              <img
                src="images/landing/Find.png"
                alt=""
                className="absolute pt-512 pl-122"
              />
              <img
                src="images/landing/ConnectJazwares.png"
                alt=""
                className="absolute pt-1000 right-122"
              />
            </div>
            <div className="flex gap-46 pt-148">
              <h1 className="font-medium text-4xl text-transparent bg-clip-text bg-gradient-to-r from-O04 to-O05 pl-104">
                That's it! Our all-in-one licensing marketplace makes it easy
                for licensees and licensors to connect and do business in a
                streamlined and efficient way.
              </h1>
              <div className="rounded-full border-AC200 p-72 border-1.5">
                <h1 className="[-webkit-text-stroke:1.5px_#61C8C9] text-center font-bold font-headings text-logo text-transparent">
                  b
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer"
        className="relative bg-N300 py-80 px-308 flex flex-col items-center gap-60 overflow-hidden"
      >
        <div id="back" className="absolute w-full z-[2]">
          <div id="cloud" className="relative">
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
          </div>
        </div>
        <div className="absolute mx-24 w-full h-232 bg-footer-gradiant z-1 top-full -translate-y-1/2" />
        <img src="logo.svg" alt="logo" className="h-40 z-[3]" />
        <h1 className="font-bold font-headings text-lg text-white z-[3]">
          Ready to connect with the greatest brands?
        </h1>
        <Button
          size="lg"
          title="Get Start"
          iconLeft="Right"
          className=" z-[3]"
        />
      </div>
      <div
        id="copywrite"
        className="bg-N500 px-128 py-16 flex items-center justify-between"
      >
        <img src="logo.svg" alt="logo" className="h-40" />
        <p className="font-bodyText text-sm text-N100">
          ©, Bipmarket, all rights reserved
        </p>
        <div className="flex gap-24">
          <h1 className="font-bold font-headings text-sm text-white tracking-md">
            Privacy Policy
          </h1>
          <h1 className="font-bold font-headings text-sm text-white tracking-md">
            Terms of use
          </h1>
        </div>
      </div>
    </>
  );
}

export default Landing;
