import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import RegisterPage from "../03-forms/pages/RegisterPage";
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
                to="/register"
                className={({ isActive }: ActiveRouter): string =>
                  isActive ? "nav-active" : ""
                }
              >
                Register Page
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
          <Route path="register" element={<RegisterPage />} />
          <Route path="user" element={<h1>User</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
