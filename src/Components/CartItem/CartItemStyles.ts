import styled from "styled-components";

export const CartItemWrapper = styled.div`
	padding: 1rem;
    border-bottom: 1px solid #333;
    margin: 10px 0;

	.item-info {
		display: flex;
		justify-content: space-around;
	}
	.item-details {
		font-size: 1.2rem;
		font-weight: 600;
	}
	.action-btns {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 1.2rem;
	}
	.action-btns span {
		border: 1px solid #2a2d3c;
		padding: 10px;
		border-radius: 50%;
	}
	.action-btns span:hover {
		cursor: pointer;
	}
`;
