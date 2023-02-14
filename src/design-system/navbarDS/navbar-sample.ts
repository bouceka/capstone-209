

export const NavbarCSSSample = `.header {
  background-color: $color-primary-900;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  &__image {
    display: flex;
    height: 7.2rem;
  }

  &__top {
    background-color: $background-color-secondary;
    text-align: center;
    @include body-text(600, 1.6rem, 2.4rem);
    letter-spacing: 0.9rem;
    padding: 0.8rem 0;

    @include respond(tab-port) {
      letter-spacing: 0.4rem;
    }

    @include respond(phone) {
      letter-spacing: normal;
    }
  }

  .main-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9.6rem;
    padding: 0 5%;

    @include respond(tab-port) {
      background-color: $color-primary-900;
    }

    .collapsed-nav {
      display: flex;
      align-items: center;
      flex-direction: row;
      flex: 1;

      & > a {
        flex: 1 1;
      }

    }

    &-list {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 4.8rem;
      height: 100%;

      @include respond(desktop) {
        gap: 3.2rem;
      }
      @include respond(tab-port) {
        position: absolute;
        top: -50rem;
        transition: all 1s ease;
        margin-top: 13.6rem;
        width: 100%;
        z-index: -1;
        display: block;


        & > li {
          background-color: $color-primary-800;
          width: 100%;
          justify-content: center;
          color: $text-black-primary;
          display: flex;
          align-items: center;
          height: 8rem;

          &:last-child {
            background-color: $color-primary-400;
          }
          &:nth-child(even) {
            background-color: $color-primary-900;
          }
        }
      }
      &.is-active {
        top: 0;
      }
    }
  }
}



#nav-icon3 {
  width: 6rem;
  height: 4.5rem;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  z-index: 45;
}

#nav-icon3 span {
  display: none;
  position: absolute;
  height: 0.4rem;
  width: 100%;
  background: $background-color-primary;
  border-radius: 0.4rem;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  @include respond(tab-port) {
    display: block;
  }
}


#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  width: 80%;
  top: 14px;
}

#nav-icon3 span:nth-child(4) {
  top: 28px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}`;
export const NavbarTSXSample = `import * as React from 'react';
import Logo from '../../assets/nic-athletics-logo-64x.png';
import { Link } from 'react-router-dom';
import { useWindowDimensions } from '../../hooks/window-dimensions';
import { useState } from 'react';

export const Header = () => {
  const { width } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuButton = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className='header'>
      <nav>
        <div className='header__top'>
          <div className='row'>
            <span className='header__top'> THE OFFICIAL SITE OF NORTH ISLAND COLLEGE BEARS</span>
          </div>
        </div>
        <div className='main-nav row'>
          {width <= 899 ? (
            <div className='collapsed-nav'>
              <Link to={'/'}>
                <img className='header__image' src={Logo} alt='NIC Athletics logo' />
              </Link>
              <div id='nav-icon3' onClick={handleMenuButton} className={openMenu ? 'open' : ''}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : null}

          <ul className={\`main-nav-list \${openMenu ? 'is-active' : ''}\`}>
            <li>
              <Link className='btn btn--header' to={'/teams'}>
                Teams
              </Link>
            </li>
            <li>
              <Link className='btn btn--header' to={'/calendar'}>
                Calendar
              </Link>
            </li>
            <li>
              <Link className='btn btn--header' to={'/fan-zone'}>
                Fan Zone
              </Link>
            </li>
            {width >= 900 ? (
              <li>
                <Link to={'/'}>
                  <img className='header__image' src={Logo} alt='NIC Athletics logo' />
                </Link>
              </li>
            ) : null}
            <li>
              <Link className='btn btn--header' to={'/inside-athletics'}>
                Inside Athletics
              </Link>
            </li>
            <li>
              <Link className='btn btn--header' to={'/support'}>
                Support
              </Link>
            </li>
            <li>
              <Link className='btn btn--secondary' to={'/sign-up'}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};`;
