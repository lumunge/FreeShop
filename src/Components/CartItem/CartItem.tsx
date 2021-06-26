import { cartItemType } from "../../App";
// icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { Typography, Container } from "@material-ui/core";
import useStyles from './CartItemStyles';

type Props = {
	item: cartItemType;
	addToCart: (clicked: cartItemType) => void;
	removeFromCart: (id: number) => void;
};



const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {

	const classes = useStyles();

	return(
	<Container className={classes.container}>
		<Typography variant="h6">{item.title}</Typography>
		<div className={classes.itemInfo}>
			<div>
				<img
					src={item.image}
					alt={item.title}
					width="100px"
					height="100px"
				/>
			</div>
			<div>
				<Typography variant="h6">Price: <span className={classes.span}>{item.price}</span></Typography>
				<Typography variant="h6">Total: <span className={classes.span}>{(item.totalAmount * item.price).toFixed(2)}</span></Typography>
			</div>
		</div>
		<div className={classes.actionBtns}>
			<span className={classes.spanBtns} onClick={() => removeFromCart(item.id)}>
				<FaMinus />
			</span>
			<p>{item.totalAmount}</p>
			<span className={classes.spanBtns} onClick={() => addToCart(item)}>
				<FaPlus />
			</span>
		</div>
	</Container>
	)
}

export default CartItem;
