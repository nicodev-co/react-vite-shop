import React from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { SiShopee } from 'react-icons/si';

const ShoppingCart = () => {
  const {cartProducts, openCheckoutSideMenu } = useContext(ShoppingCartContext);
  return (
    <button
      onClick={() => openCheckoutSideMenu()}
      className='flex justify-between items-center gap-2 relative'
    >
      <SiShopee className='text-lg group hover:text-xl' />{' '}
      <span className='absolute -top-2 -right-3 bg-[#9748FF] px-1 rounded-2xl font-bold text-white text-xs'>
        {cartProducts.length}
      </span>
    </button>
  );
};

export default ShoppingCart;
