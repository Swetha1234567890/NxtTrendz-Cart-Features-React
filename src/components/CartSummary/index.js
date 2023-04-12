// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-value">
              <span className="label">Order Total:</span>Rs {total} /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button className="check-out-btn" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
