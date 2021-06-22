import { Container, Typography } from "@material-ui/core";
import { cartItemType } from "../../App";
import CartItem from "../CartItem/CartItem";
import {CartHeader, Price} from './CartStyles';

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
		<Container>
			<CartHeader>
				{cartItems.length === 0 ? (
					<Typography variant="h4">No Items In Cart</Typography>
				) : (
					<Typography variant="h4">{cartItems.length} Item(s)</Typography>
				)}
			</CartHeader>
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
			<Typography variant="h5">
				Payable Amount:{" "}
				<Price>
					{" "}
					Ksh {getTotals(cartItems).toFixed(2)}
				</Price>
			</Typography>
		</Container>
	);
};

export default Cart;
