import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { AiOutlineHeart } from 'react-icons/ai';

const Card = (data) => {
  const {
    openProductDetail,
    setCount,
    count,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    closeProductDetail,
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
    closeCheckoutSideMenu();
  };

  const addProductCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderButtom = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <button className='w-24 h-10 m-auto cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] bg-[#9748FF]'>
          <span className='font-bold  text-white'>Added</span>
        </button>
      );
    } else {
      return (
        <button
          className='w-24 h-10 m-auto bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out'
          onClick={(event) => addProductCart(event, data.data)}
        >
          <span className='font-bold text-[#333] group-hover:text-white'>
            Add
          </span>
        </button>
      );
    }
  };

  return (
    <div
      className='flex flex-col bg-white cursor-pointer w-56 rounded-lg'
      onClick={() => showProduct(data.data)}
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

      {renderButtom(data.data.id)}
    </div>
  );
};

export default Card;
