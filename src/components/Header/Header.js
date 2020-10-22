import React from "react";
import { NavLink } from "react-router-dom";

// import to use the recoil state
import { useRecoilState } from "recoil";
// import the atom that controls the global state
import { userState } from "../../recoil/atoms";

import "./Header.css";

const Header = (props) => {
  const [user, setUser] = useRecoilState(userState);

  function login() {
    const dbUser = {
      username: "Test user",
      avatar:
        "https://gamespot1.cbsistatic.com/uploads/scale_landscape/1587/15875866/3660435-avatar.jpg",
    };

    setUser(dbUser);
  }

  function logout() {
    setUser(null);
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
            <li className='btn' onClick={login}>
              Log in
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
