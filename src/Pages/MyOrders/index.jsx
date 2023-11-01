import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className='flex justify-center items-center w-80 relative'>
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProduct={order.totalProducts}
          />
        </Link>
      ))}
    </>
  );
}

export default MyOrders;
