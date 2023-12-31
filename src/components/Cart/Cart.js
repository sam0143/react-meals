import Module from '../UI/Module';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => { 
        cartCtx.removeItem(id)
    }

    const cartAddRemoveHandler = (item) => {
            cartCtx.addItem(item)
     }

    const cartItems = (<ul className={classes['cart-items']}>

        {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartAddRemoveHandler.bind(null, item)}
            />
        ))}
    </ul>
    );
    return (
        <Module onClosecart={props.onClosecart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClosecart}>Close</button>
                { hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Module>
    )
}

export default Cart;