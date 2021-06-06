// import styles
import {
	Wrapper,
	ProductWrapper,
	ProductImg,
	ProductDetails,
	Button,
} from "./ProductStyles";
// import types
import { cartItemType } from "../../App";

// import cart icon
import { FaCartPlus } from "react-icons/fa";

type Props = {
	product: cartItemType;
	addToCart: (clicked: cartItemType) => void;
};

const Product: React.FC<Props> = ({ product, addToCart }) => {
	return (
		<Wrapper>
			<ProductWrapper key={product.id}>
				<ProductImg>
					<img src={product.image} alt={product.title} />
				</ProductImg>
				<ProductDetails>
					<p>{product.title}</p>
					<span>Ksh {product.price}</span>
				</ProductDetails>
			</ProductWrapper>
			<Button onClick={() => addToCart(product)}>
				<FaCartPlus />
			</Button>
		</Wrapper>
	);
};

export default Product;

