import styled from "styled-components";

export const AppWrapper = styled.div`
	width: 70%;
	h1 {
		text-align: center;
	}
`;

export const MainWrapper = styled.div`
	display: flex;
	width: 100%;
`;

export const Products = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	width: 70%;
`;

export const No = styled.span`
	position: absolute;
	top: -15px;
	right: -10px;
	z-index: 999;
	font-size: 20px;
`;

export const CartContainer = styled.aside`
	position: fixed;
	right: 0;
	top: 0;
	width: 25%;
	height: 100vh;
	overflow: scroll;
    background-color:  #d7dbdd;
    h2{
        text-align: center;
    }
	p{
		text-align: center;
	}
    .amount{
        color: #28ea89;
        font-size: 1.3rem;
        padding: 3rem 0;
        text-decoration: underline;
    }
`;
