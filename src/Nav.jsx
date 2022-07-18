import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav className='dashboard__nav'>
    <div className="dashboard__nav--content">
      <div className="flex align-center">
        <button className='btn btn__undercover burger'>
          <i class="fa-solid fa-bars"></i>
          <FontAwesomeIcon icon="bars"/>
        </button>
        <figure class="logo"> 
        <img src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png" alt="" class="logo__img"></img>
        </figure>
      </div>
      <div className="nav__links">
        <span className='user__name--span'>
        <span class="el-popover__reference-wrapper"><button class="nav__icon el-popover__reference" aria-describedby="el-popover-8927" tabindex="0"><span>V</span></button></span>
        </span>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
