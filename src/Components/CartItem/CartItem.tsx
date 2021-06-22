import { cartItemType } from "../../App";
import { CartItemWrapper } from "./CartItemStyles";
// icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { Typography } from "@material-ui/core";

type Props = {
	item: cartItemType;
	addToCart: (clicked: cartItemType) => void;
	removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
	<CartItemWrapper>
		<Typography variant="h6">{item.title}</Typography>
		<div className="item-info">
			<div className="item-img">
				<img
					src={item.image}
					alt={item.title}
					width="100px"
					height="100px"
				/>
			</div>
			<div className="item-details">
				<Typography variant="h6">Price: <span>{item.price}</span></Typography>
				<Typography variant="h6">Total: <span>{(item.totalAmount * item.price).toFixed(2)}</span></Typography>
			</div>
		</div>
		<div className="action-btns">
			<span onClick={() => removeFromCart(item.id)}>
				<FaMinus />
			</span>
			<p>{item.totalAmount}</p>
			<span onClick={() => addToCart(item)}>
				<FaPlus />
			</span>
		</div>
	</CartItemWrapper>
);

export default CartItem;
