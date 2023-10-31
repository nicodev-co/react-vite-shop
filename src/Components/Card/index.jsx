import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { AiOutlineHeart } from 'react-icons/ai';

const Card = (data) => {
  const { openProductDetail, setCount, count } =
    useContext(ShoppingCartContext);

  return (
    <div
      className='flex flex-col bg-white cursor-pointer w-56 rounded-lg'
      onClick={() => openProductDetail()}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 py-1 px-3'>
          {data.data.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <div className='absolute  top-0 right-0 flex justify-center items-center  rounded-full m-2 text-2xl text-blue-700'>
          <AiOutlineHeart />
        </div>
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-bold'>${data.data.price}</span>
      </p>
      <button
        className='w-40 h-12 m-auto bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out'
        onClick={() => setCount(count + 1)}
      >
        <span className='font-bold text-[#333] group-hover:text-white'>
          Add
        </span>
      </button>
    </div>
  );
};

export default Card;
