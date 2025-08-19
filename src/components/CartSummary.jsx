import { useSelector } from 'react-redux';
import {selectTotalItems, selectTotalPrice} from '../redux/cartSlice'
import {formatCurrency} from "../utils/formatCurrency"

const CartSummary = () => {
  const items = useSelector(selectTotalItems)
  const total = useSelector(selectTotalPrice)
  return (
    <div className='cart-summary'>
      <div> <strong>Items:</strong>{items}</div>
      <div><strong>Total:</strong>{formatCurrency(total)}</div>
    </div>
  )
}

export default CartSummary
