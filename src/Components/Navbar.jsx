import logo from "../assets/Logo.svg";
function Navbar() {
  return (
    <div className="navbar fixed w-full top-0 flex Atvik-Regular font-medium backdrop-blur-sm bg-slate-200 z-10  justify-between py-8 px-16 ">
      <div className="  ">
        <ul className="flex-row flex text-base p-4 gap-8">
          <li>
            <a href="#Hero"> Home </a>
          </li>
          <li>
            About Us
          </li>
          <li>
            Why Us
          </li>
          <li>
            Gallery
          </li>
        </ul>
      </div>
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <button className="pink px-8 py-4 rounded-lg text-base text-white">Get in Touch</button>
    </div>
  );
}

export default Navbar;