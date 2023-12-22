import React, { useState } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";

const HeaderComponent = () => {
  const handleLogout = () => {
    var loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
  };

  return (
    <>
      <div className="header">
        <label for="nav-mobile-input" class="nav__bars-btn">
          <span class="dot">...</span>
        </label>

        <input
          type="checkbox"
          hidden
          class="nav__input"
          id="nav-mobile-input"
        ></input>

        <label for="nav-mobile-input" class="nav__overlay"></label>

        <div className="header__category-mobile">
          <label for="nav-mobile-input" class="nav__mobile-close">
            <i class="fas fa-times"></i>
          </label>
          <div className="header__category__item-mobile">
            <p class="nav__mobile-link">Sách</p>
            <p class="nav__mobile-link">Học sinh</p>
          </div>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <img
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt=""
            />
            <h4>TRI THỨC TRỰC TUYẾN</h4>
          </div>
        </Link>

        <div className="header__category">
          <div className="header__category__item">
            <p>
              <NavLink
                end
                to="/book"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Sách
              </NavLink>
            </p>
            <p>
              <NavLink
                end
                to="/students"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Học sinh
              </NavLink>
            </p>
          </div>
        </div>
        <div className="header__search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <img
            src="https://s120-ava-talk.zadn.vn/1/2/b/e/80/120/e125d654d19f1715258be00b63ce3656.jpg"
            alt=""
          ></img>
          <div id="user-popup" class="hide" aria-hidden="false">
            <div class="user-info">
              <img
                src="https://s120-ava-talk.zadn.vn/1/2/b/e/80/120/e125d654d19f1715258be00b63ce3656.jpg"
                alt=""
              ></img>
              <h3>Trung Nhân</h3>
              <a href="*" class="handle-logout" onClick={() => handleLogout()}>
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderComponent;
