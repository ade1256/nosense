import ImgLogo from "@/assets/images/logo-nosense.svg"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <a onClick={() => router.push("/")}>
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
              <a onClick={() => router.push("/locus")}>Locus Stream</a>
            </li>
            <li>
              <a onClick={() => router.push("/event")}>Event</a>
            </li>
            <li>
              <a onClick={() => router.push("/merch")}>Merch</a>
            </li>
            <li>
              <a onClick={() => router.push("/about")}>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
