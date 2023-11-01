import { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/products'
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Ha ocurrido un error: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className='text-center font-bold text-lg py-6'>HOME</h2>
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
