import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from './Context';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import MyOrder from './Pages/MyOrder';
import MyOrders from './Pages/MyOrders';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/SignIn';
import Navbar from './Components/Navbar';
import CheckoutSideMenu from './Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
  const { account, signOut } = useContext(ShoppingCartContext);
  const accountLocalStorage = localStorage.getItem('account');
  const parseAccount = JSON.parse(accountLocalStorage);
  const noAccountLocalStorage = parseAccount
    ? Object.keys(parseAccount).length === 0
    : true;
  const noAccountLocalState = account
    ? Object.keys(account).length === 0
    : true;
  const hasUserAccount = !noAccountLocalStorage || !noAccountLocalState;

  let routes = useRoutes([
    { path: '/', element: hasUserAccount && !signOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/:category', element: hasUserAccount && !signOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

function App() {

  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
