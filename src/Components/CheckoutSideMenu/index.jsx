import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts } =
    useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filteredProducts);
  }

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col w-[360px] h-[calc(90%)] fixed right-0 top-[5rem]  border border-black bg-white rounded-xl`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => closeCheckoutSideMenu(false)}>
          <AiOutlineClose className='text-blue-500' />
        </button>
      </div>
      <div className='p-6 overflow-y-auto'>
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6'>
          <p className='flex justify-between items-center'>
            <span className='font-medium'>Total:</span>
            <span className='font-bold text-2xl'>${totalPrice(cartProducts)}</span>
          </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
