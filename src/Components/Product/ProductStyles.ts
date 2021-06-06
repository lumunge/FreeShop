import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1rem;
	border-radius: 20px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ProductWrapper = styled.div`
	display: flex;

	&:hover .tip {
		display: block;
	}
`;

export const ProductImg = styled.div`
	width: 300px;
	height: 300px;
	padding-right: 1rem;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const ProductDetails = styled.div`
	padding: 2rem 1rem;
	font-size: 1.2rem;

	p {
		color: #2a2d3c;
		line-height: 30px;
	}

	span {
		color: #28ea89;
		font-weight: bold;
		text-decoration: underline;
	}
`;

export const Button = styled.button`
	position: relative;
	float: right;
	bottom: 40px;
	right: 40px;
	color: #28ea89;
	font-size: 1.2rem;
	background: #2a2d3c;
	border: none;
	padding: 10px 25px;
	border-radius: 10px;

	&:hover {
		cursor: pointer;
		background: #cacfd2;
        color: #333;
		transition: all.4s ease-in;
	}
`;
