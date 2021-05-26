import { cartItemType } from "../../App";
import { CartItemWrapper } from "./CartItemStyles";
// icons
import { FaPlus, FaMinus } from "react-icons/fa";

type Props = {
	item: cartItemType;
	addToCart: (clicked: cartItemType) => void;
	removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
	<CartItemWrapper>
		<h3>{item.title}</h3>
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
				<p>Price: {item.price}</p>
				<p>Total: {(item.totalAmount * item.price).toFixed(2)}</p>
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
