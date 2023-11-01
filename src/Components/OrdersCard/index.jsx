import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>01-11-2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
