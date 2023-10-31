import { useContext } from 'react';
import './styles.css';
import { AiOutlineClose } from 'react-icons/ai';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const { isProductDetailOpen,closeProductDetail } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? 'flex' : 'hidden'
      } flex-col w-[360px] h-[calc(100vh-68px)] fixed right-0 top-[70px] border border-black bg-white rounded-xl`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => closeProductDetail(false)}>
          <AiOutlineClose className='text-blue-500' />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
