import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { RiShoppingCartLine } from 'react-icons/ri'


const StyledCart = styled.div`
    position: absolute;
    right: ${props => (props.open ? 0 : '-100%')};
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 11;
    transition: right 400ms;
    #header {
        height: 60px;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 8px 0px;
        span {
            font-weight: 600;
            font-size: 108%;
        }
    }
    #main {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-top: 16%;
        padding: 0 1rem;
        svg {
            font-size: 3rem;
            margin-bottom: .5rem;
        }
        button {
            background-color: #DF2618;
            color: white;
            font-weight: bold;
            display: inline-block;
            width: 100%;
            border: none;
            padding: 1rem 0;
            font-size: 108%;
            margin-top: 2.5rem;
            border-radius: 3px;
            cursor: pointer;
        }
    }
`

const Cart = ({open, close}) => {
    return (
        <StyledCart open={open}>
            <div id="header">
                <span>Your Order</span>
                <AiOutlineClose onClick={close} />
            </div>
            <div id="main">
                <RiShoppingCartLine />
                <h2>Your cart is empty</h2>
                <button>Start Your Order</button>
            </div>
        </StyledCart>
    )
}

export default Cart
