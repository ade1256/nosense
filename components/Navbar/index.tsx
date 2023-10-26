import ImgLogo from "@/assets/images/logo-nosense.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <a href="index.html">
            <img
              src={ImgLogo.src}
              alt="nonsense-collective"
              style={{
                height: 54
              }}
            />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="locus.html">Locus Stream</a>
            </li>
            <li>
              <a href="event.html">Event</a>
            </li>
            <li>
              <a href="merch.html">Merch</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
