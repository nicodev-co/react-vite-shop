import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ShoppingCartContext } from '../../Context';

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col w-[360px] h-[calc(100vh-68px)] fixed right-0 top-[70px] border border-black bg-white rounded-xl`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => closeCheckoutSideMenu(false)}>
          <AiOutlineClose className='text-blue-500' />
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
