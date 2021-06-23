// import types
import { cartItemType } from "../../App";
// import cart icon
import { FaCartPlus } from "react-icons/fa";
import { Paper, Button, Typography } from "@material-ui/core";
import useStyles from './ProductStyles';

type Props = {
	product: cartItemType;
	addToCart: (clicked: cartItemType) => void;
};

const Product: React.FC<Props> = ({ product, addToCart }) => {

	const classes = useStyles();


	return (
		<Paper elevation={4} className={classes.paper}>
			<div className={classes.ProductWrapper} key={product.id}>
				<div>
					<img className={classes.ProductImg} src={product.image} alt={product.title} />
				</div>
				<div className={classes.ProductDetails}>
					<Typography variant="body1">{product.title}</Typography>
					<br />
					<Typography variant="body2">Ksh {product.price}</Typography>
				</div>
			</div>
			<Button variant="contained" className={classes.button} onClick={() => addToCart(product)}>
				<FaCartPlus />
			</Button>
		</Paper>
	);
};

export default Product;

