import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? 'flex' : 'hidden'
      } flex-col w-[360px] h-[calc(99vh-5rem)] fixed right-0 top-[5rem]  border border-black bg-white rounded-xl`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => closeProductDetail(false)}>
          <AiOutlineClose className='text-blue-500' />
        </button>
      </div>
      <figure className='p-6'>
        <img
          className='w-full h-full rounded-lg'
          src={productToShow.images?.[0]}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>
          ${productToShow.price}
        </span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
