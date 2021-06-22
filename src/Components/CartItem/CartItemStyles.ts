import styled from "styled-components";

export const CartItemWrapper = styled.div`
	padding: 1rem;
    border-bottom: 1px solid #333;
    margin: 10px 0;

	.item-info {
		display: flex;
		justify-content: space-around;
	}
	.item-details span{
		color: #2ecc71;
	}
	.action-btns {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 3rem;
	}
	.action-btns span {
		border: 1px solid #2a2d3c;
		padding: 5px 10px;
	}
	.action-btns span:hover {
		cursor: pointer;
		background: #2a2d3c;
		color: #fff;
		transition: all .4s ease-in-out;
	}
`;
