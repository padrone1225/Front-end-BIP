function Footer() {
  return (
    <footer className="flex xs:flex-col xs:gap-16 justify-between items-center px-8 pt-16 pb-12">
      <img src="logo.svg" alt="logo" className="h-40" />
      <p className="text-N75 text-sm font-bodyText">
        ©, Bipmarket, all rights reserved
      </p>
      <div className="flex items-center gap-24 text-N500 text-sm font-bold font-headings tracking-[0.02rem]">
        <h1>Privacy Policy</h1>
        <h1>Terms of Use</h1>
      </div>
    </footer>
  );
}

export default Footer;
