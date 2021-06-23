import { Container, Typography, Button } from "@material-ui/core";
import Close from '@material-ui/icons/Close';
import { cartItemType } from "../../App";
import CartItem from "../CartItem/CartItem";
import useStyles from './CartStyles';


type Props = {
	cartItems: cartItemType[];
	addToCart: (clicked: cartItemType) => void;
	removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

	const classes = useStyles();

	//calculating total price
	const getTotals = (items: cartItemType[]) =>
		items.reduce(
			(acc: number, item) => acc + item.totalAmount * item.price,
			0
		);

	return (
		<Container>
			<div className={classes.CartHeader}>
				{cartItems.length === 0 ? (
					<Typography variant="h4">No Items In Cart</Typography>
				) : (
					<Typography variant="h4">{cartItems.length} Item(s)</Typography>
				)}
			</div>
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
				<div className={classes.Price}>
					{" "}
					Ksh {getTotals(cartItems).toFixed(2)}
				</div>
			</Typography>
		</Container>
	);
};

export default Cart;
