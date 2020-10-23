import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import UserModel from "../../models/UserModel";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

import "./Header.css";

const Header = (props) => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((response) => {
        setUser(response.data);
      });
    }
    // eslint-disable-next-line
  }, []);

  function logout() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <header>
      <div className='logo'>
        <NavLink to='/'>Games!</NavLink>
      </div>
      <div className='links'>
        <ul>
          {user ? (
            <>
              <li>{user.username}</li>
              <li>
                <NavLink to={"/games"}>All Games</NavLink>
              </li>
              <li>
                <NavLink to={"/games/new"}>Add New Game</NavLink>
              </li>
              <li className='btn' onClick={logout}>
                Log Out
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
