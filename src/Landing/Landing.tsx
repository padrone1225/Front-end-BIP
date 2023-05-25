import Button from "../components/Buttons/Button";

function Landing() {
  return (
    <div className="px-24">
      <div className="w-1216 h-253 bg-radial-gradiant absolute z-0 -top-169"></div>
      <div className="flex justify-between items-center z-1 py-24">
        <img src="logo.svg" alt="logo" className="h-40" />
        <div className="flex items-center gap-12">
          <Button size="sm" variant="secondary" title="Login" />
          <Button size="sm" variant="secondary" title="Signup" />
        </div>
      </div>
      <div>
        <img src="images/landing/Cloud.png" alt="cloud" />
      </div>
    </div>
  );
}

export default Landing;
