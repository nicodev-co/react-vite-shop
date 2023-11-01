import { useContext } from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

const Home = () => {
  const { items, setSearchByTitle,filteredItems } = useContext(ShoppingCartContext);

  const renderView = () => {

    if (setSearchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        
        return filteredItems?.map((item) => <Card key={item.id} data={item} />);
      }else {
       return <div>No hay registros</div>
      }
    } else {
      return items?.map((item) => <Card key={item.id} data={item} />);
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
