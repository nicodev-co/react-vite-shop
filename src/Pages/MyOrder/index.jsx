import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { HiArrowUturnLeft } from 'react-icons/hi2';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if (index === 'last') index = order?.length - 1;

  return (
    <>
      <div className='flex justify-center items-center font-bold text-lg w-80 relative py-6'>
        <Link to={'/my-orders'} className='absolute left-0'>
          <HiArrowUturnLeft className='h-6 w-6 text-black' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default MyOrder;
