import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const OrderCard = (props) => {
  const { title, imageUrl, price } = props;

  return (
    <div className='flex justify-between items-center mb-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-md font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-semibold'>{price}</p>
        <button>
          <AiOutlineClose className='text-blue-500' />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
