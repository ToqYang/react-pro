import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";

interface ActiveRouter {
  isActive: boolean;
}

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }: ActiveRouter): string =>
                  isActive ? "nav-active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className={({ isActive }: ActiveRouter): string =>
                  isActive ? "nav-active" : ""
                }
              >
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }: ActiveRouter): string =>
                  isActive ? "nav-active" : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="user" element={<h1>User</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
