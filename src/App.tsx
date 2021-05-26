import { useState } from "react";
import { useQuery } from "react-query";
// components
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
// styles
import {AppWrapper, Products, CartContainer, MainWrapper} from "./AppStyles";


//Setting product types
export type cartItemType = {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	totalAmount: number;
};

const App = () => {
  // states
	const [cartItems, setCartItems] = useState([] as cartItemType[]);

	const fetchProducts = async (): Promise<cartItemType[]> =>
		await (await fetch("https://fakestoreapi.com/products")).json();

	const { data, isLoading, error } = useQuery<cartItemType[]>(
		"products",
		fetchProducts
	);
	console.log(data);

  // adding items to Cart
  const addToCart = (clicked: cartItemType) => {
    setCartItems((prevItems) => {
      // check for item in cart
      const isItemCart = prevItems.find((item) => item.id === clicked.id);

      if(isItemCart){
        return prevItems.map(item => 
            item.id === clicked.id
            ? {...item, totalAmount: item.totalAmount + 1}
            : item
          )
      }

      return [...prevItems, {...clicked, totalAmount: 1}];
    })
  }
  
  // removing items from cart
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => 
      prevItems.reduce((acc, item) => {
        if(item.id === id){
          if(item.totalAmount === 1) return acc;
          return [...acc, {...item, totalAmount: item.totalAmount - 1}];
        }else{
          return [...acc, item];
        }
      }, [] as cartItemType[])
    )
  }

  

	if (isLoading) return <h4>Loading Products....</h4>;
	if (error) return <h4>An Error Ocurred</h4>;

	return (
		<AppWrapper>
			<h1>Free Shop</h1>
      <MainWrapper>
        <CartContainer>
          <Cart
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </CartContainer>
        <Products>
          {data?.map((product) => (
            <div key={product.id}>
              <Product
                product={product} 
                addToCart={addToCart}
               />
            </div>
          ))}
        </Products>
        </MainWrapper>
		</AppWrapper>
	);
};

export default App;
