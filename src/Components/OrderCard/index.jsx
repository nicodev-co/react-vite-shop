import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderBsFillTrashFill;
  if (handleDelete) {
    renderBsFillTrashFill = <BsFillTrashFill className='text-red-500' />;
  }

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
        <button onClick={() => handleDelete(id)}>{renderBsFillTrashFill}</button>
      </div>
    </div>
  );
};

export default OrderCard;
