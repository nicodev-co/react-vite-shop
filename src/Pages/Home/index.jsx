import { useContext } from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

const Home = () => {
  const { items } = useContext(ShoppingCartContext);
  return (
    <div>
      <h1 className='text-center font-bold text-lg py-6'>HOME</h1>
      <div className='grid gap-4 grid-cols-4 w-full'>
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        <ProductDetail />
      </div>
    </div>
  );
};

export default Home;
