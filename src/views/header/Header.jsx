import React, { useState } from 'react'
import './Header.css'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Header = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  const dispatch = useDispatch();

  const logOut = () => {
      dispatch(logout())
  };

  return (
    <>
        <header>
         <div className="header-wrap">
            <ul className="profile">
                <li>
                  <a className="dropdown-toggle" href="#" onClick={handleToggle}>
                      <img src="/src/assets/images/1.png" alt="" className="avatar" />
                  </a> 
                  {isToggled && (
                    <ul className="dropdown-menu">
                      <li>
                        <a onClick={logOut}>logout</a>
                      </li>
                    </ul>
                  )}
                </li>
            </ul>
         </div>
       </header>
    </>
  )
}

export default Header