import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
	container:{
		padding: "1rem",
		borderBottom: "1px solid #333",
		margin: "10px 0",
	},
	itemInfo:{
		display: "flex",
		justifyContent: "space-around"
	},
	span:{
		color: "#2ecc71"
	},
	actionBtns:{
		width: "100%",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: "3rem",
	},
	spanBtns:{
		border: "1px solid #2a2d3c",
		padding: "5px 10px",
		'&:hover':{
			cursor: "pointer",
			background: "#2a2d3c",
			color: "#fff",
			transition: "all .4s ease-in-out"
		}
	}
}))

