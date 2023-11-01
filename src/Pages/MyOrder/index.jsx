import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <h2 className='text-center font-bold text-lg py-6'>My Order</h2>
      <div className='flex flex-col w-80'>
        {order?.slice(-1)[0].products.map((product) => (
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
