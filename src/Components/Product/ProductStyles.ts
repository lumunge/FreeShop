import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
	paper:{
		padding: "1rem"
	},
	cartBtn:{
		position: "absolute",
		right: "10px",
		top: "20px"
	},
	button:{
		position: "relative",
		float: "right",
		bottom: "40px",
		right: "40px",
		color: "#28ea89",
		fontSize: "1.2rem",
		background: "#2a2d3c",
		padding: "10px 25px",
	},
	ProductWrapper:{
		display: "flex"
	},
	ProductDetails:{
		padding: "1rem"
	},
	ProductImg:{
		width: "200px",
		height: "200px"
	}
}))
