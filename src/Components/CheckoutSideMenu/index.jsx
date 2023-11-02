import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByTitle,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleAmount = (id, action) => {
    const filteredProducts = cartProducts.map((product) => {
      if (product.id == id) {
        if (action == 'INCREMENT')
          return { ...product, amount: product.amount + 1 };
        if (action == 'DECREMENT' && product.amount > 1)
          return { ...product, amount: product.amount - 1 };
      }

      return product;
    });
    setCartProducts(filteredProducts);
  };

  const handleChangeAmount = (event, id) => {
    const filteredProducts = cartProducts.map((product) => {
      if (product.id == id) {
        return { ...product, amount: parseInt(event.target.value) || 1 };
      }

      return product;
    });
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01-11-2023',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle(null);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col w-[360px] h-[calc(99vh-5rem)] fixed right-0 top-[5rem]  border border-black bg-white rounded-xl`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => closeCheckoutSideMenu(false)}>
          <AiOutlineClose className='text-blue-500' />
        </button>
      </div>
      <div className='p-6 overflow-y-auto flex-1'>
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
            handleAmount={handleAmount}
            handleChangeAmount={handleChangeAmount}
            amount={product.amount}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-medium'>Total:</span>
          <span className='font-bold text-2xl'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to={'/my-orders/last'}>
          <button
            className='w-full bg-black py-3 text-white rounded-lg'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
