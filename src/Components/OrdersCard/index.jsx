import React from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { GiShoppingBag } from 'react-icons/gi';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className='flex justify-between items-center mb-4 border border-black p-4 rounded-lg w-80'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='flex items-center gap-2 font-medium'>
            <BsFillCalendarDateFill />
            01-11-2023</span>
          <span className='flex items-center gap-2 font-medium'>
            <GiShoppingBag />
            {totalProducts} articles
          </span>
        </p>
        <p className='flex items-center gap-3'>
          <span className='font-bold text-2xl'>${totalPrice}</span>
          <FaArrowRightFromBracket />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
