import React from "react";
import { NavLink } from "react-router-dom";

const NavComponent = () => {
  const activeNavCss = "nav-item nav-link link-body-emphasis active";
  const navCss = "nav-item nav-link link-body-emphasis";
  return (
    <React.Fragment>
      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeNavCss : navCss)}
          >
            صفحه اصلی
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? activeNavCss : navCss)}
          >
            خدمات
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeNavCss : navCss)}
          >
            بلاگ
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeNavCss : navCss)}
          >
            درباره ما
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeNavCss : navCss)}
          >
            تماس با ما
          </NavLink>
        </nav>
      </div>
    </React.Fragment>
  );
};
export default NavComponent;
