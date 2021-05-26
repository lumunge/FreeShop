import { cartItemType } from "../../App";
import CartItem from "../CartItem/CartItem";

type Props = {
	cartItems: cartItemType[];
	addToCart: (clicked: cartItemType) => void;
	removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
	//calculating total price
	const getTotals = (items: cartItemType[]) =>
		items.reduce(
			(acc: number, item) => acc + item.totalAmount * item.price,
			0
		);

	return (
		<>
			<h2>Shopping Cart Here</h2>
			{cartItems.length === 0 ? <p>No Items In Cart</p> : null}
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
			<h4>Payable Amount: <span className="amount"> Ksh {getTotals(cartItems).toFixed(2)}</span></h4>
		</>
	);
};

export default Cart;
