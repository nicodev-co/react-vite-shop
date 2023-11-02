import { createContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  // Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

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

  const filterItems = (items, searchBy, key) => {
    return items?.filter((item) => {
      const value = key.split('.').reduce((obj, k) => obj?.[k], item);
      return value && value.toLowerCase().includes(searchBy.toLowerCase());
    });
  };

  const filterBy = ({ searchType, items, searchByTitle, searchByCategory }) => {
    if (searchType === 'BY_TITLE') {
      return filterItems(items, searchByTitle, 'title');
    }
    if (searchType === 'BY_CATEGORY') {
      return filterItems(items, searchByCategory, 'category.name');
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filterItems(
        filterItems(items, searchByCategory, 'category.name'),
        searchByTitle,
        'title'
      );
    }

    return items;
  };

  useEffect(() => {
    let searchType = null;
    if (searchByTitle && searchByCategory) searchType = 'BY_TITLE_AND_CATEGORY';
    else if (searchByTitle) searchType = 'BY_TITLE';
    else if (searchByCategory) searchType = 'BY_CATEGORY';

    setFilteredItems(
      filterBy({
        searchType,
        items,
        searchByTitle,
        searchByCategory,
      })
    );
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
