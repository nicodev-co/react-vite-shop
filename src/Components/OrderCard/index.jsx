import React from 'react';
import {
  BsFillTrashFill,
  BsArrowUpShort,
  BsArrowDownShort,
} from 'react-icons/bs';

const OrderCard = (props) => {
  const {
    id,
    title,
    imageUrl,
    price,
    handleDelete,
    handleAmount,
    amount,
    handleChangeAmount,
  } = props;
  let renderBsFillTrashFill;
  if (handleDelete) {
    renderBsFillTrashFill = <BsFillTrashFill className='text-red-500' />;
  }

  return (
    <div className='flex justify-between items-center mb-2'>
      <div className='flex flex-1 flex-col justify-center items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm text-center font-light'>{title}</p>
      </div>

      <div className='flex flex-1 justify-center items-center gap-1'>
        {handleAmount ? (
          <>
            <button onClick={() => handleAmount(id, 'DECREMENT')}>
              <BsArrowDownShort className='text-blue-500 text-lg font-bold' />
            </button>
            <input
              onChange={(event) => handleChangeAmount(event, id)}
              type='text'
              className='w-10 border border-blue-500 rounded-md text-center focus:outline-none'
              value={amount}
            />
            <button onClick={() => handleAmount(id, 'INCREMENT')}>
              <BsArrowUpShort className='text-blue-500 text-lg font-bold' />
            </button>
          </>
        ) : (
          
          <div className='flex flex-col items-center w-full'>
            <p className='font-bold'>Cant</p>
            <p className='text-lg font-semibold'>{amount}</p>
          </div>
        )}
      </div>

      <div className='flex flex-1 justify-around items-center gap-2'>
        <div className='flex flex-col items-center w-full'>
          <p className='font-bold'>Unit</p>
          <p className='text-lg font-semibold'>${price}</p>
        </div>
        <div className='flex flex-col items-center w-full'>
          <p className='font-bold'>Total</p>
          <p className='text-lg font-semibold'>${price * amount}</p>
        </div>
        <button onClick={() => handleDelete(id)}>
          {renderBsFillTrashFill}
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
