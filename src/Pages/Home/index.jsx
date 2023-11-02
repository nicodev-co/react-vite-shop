import { useContext } from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

const Home = () => {
  const { items, setSearchByTitle, filteredItems, searchByTitle } =
    useContext(ShoppingCartContext);

  const renderView = () => {

    const products =  filteredItems ?? items;
    
    if (products?.length > 0) {
      return products?.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <div>No products founds</div>;
    }
  };

  return (
    <div>
      <h1 className='text-center font-bold text-lg py-6'>HOME</h1>
      <div className='flex justify-center'>
        <input
          type='text'
          placeholder='Search a product'
          className='rounded-lg border border-blue-500 w-80 p-2 mb-4 focus:outline-none'
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </div>
      <div className='grid gap-4 grid-cols-4 w-full'>
        {renderView()}
        <ProductDetail />
      </div>
    </div>
  );
};

export default Home;
