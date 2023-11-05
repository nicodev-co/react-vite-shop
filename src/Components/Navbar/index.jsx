import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';

const Navbar = () => {
  const { setSearchByCategory, setSignOut, signOut } =
    useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';
  const handledSignOut = () => {
    localStorage.setItem('sign-out', JSON.stringify(true));
    setSignOut(true);
  };

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 bg-white border-b-2 border-[#9748FF]  text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-bold text-xl'>
          <NavLink
            to={`${signOut ? 'sign-in' : '/'}`}
            className={'text-[#9748FF]'}
            onClick={() => setSearchByCategory()}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => setSearchByCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            onClick={() => setSearchByCategory('furniture')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => setSearchByCategory('toys')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => setSearchByCategory('others')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        {!signOut ? (
          <>
            <li className='text-black/60'>nicodev26@gmail.com</li>
            <li>
              <NavLink
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/my-account'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sign-in'
                onClick={() => handledSignOut()}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Sign Out
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to='/sign-in'
              onClick={() => handledSignOut()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li>
        )}

        <li className='flex items-center gap-1'>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
