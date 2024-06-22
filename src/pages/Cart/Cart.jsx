import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CatalogueList } from '../../helpers/CatalogueList'
import { CatalogueContext } from '../../context/CatalogueContext'
import { CartItem } from '../Cart/CartItem'
import "../../styles/Cart.css"

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(CatalogueContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items </h1>
      </div>

      <div className="cartItems">
        {CatalogueList.map((CatalogueItem) => {
          if (cartItems[CatalogueItem.id] !== 0) {
            return <CartItem data={CatalogueItem} />;
          } else {
            return null;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h1> Subtotal: Rs. {totalAmount} </h1>
          <button onClick={() => navigate("/catalog")}> Continue Shopping </button>
          <button onClick={() => navigate("/checkout")}> {" "} Checkout {" "} </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is empty</h1>
      )}
    </div>
  );
}


// import React, { useContext} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { CatalogueList } from '../../helpers/CatalogueList'
// import { CatalogueContext } from '../../context/CatalogueContext'
// import { CartItem } from '../Cart/CartItem'
// import "../../styles/Cart.css"

// function Cart() {
//   const { cartItems, getTotalCartAmount } = useContext(CatalogueContext);
//   const totalAmount = getTotalCartAmount();
//   const navigate = useNavigate();
//   return (
//     <div className="cart">
//       <div>
//         <h1> Your Cart Items </h1>
//       </div>

//       <div className="cartItems">
//         {CatalogueList.map((CatalogueItem) => {
//           if (cartItems[CatalogueItem.id] !== 0) {
//             return <CartItem data={CatalogueItem} />;
//           } else {
//             return null;
//           }
//         })}
//       </div>

//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <h1> Subtotal: Rs. {totalAmount} </h1>
//           <button onClick={() => navigate("/Catalogue")}> Continue Shopping </button>
//           <button onClick={() => navigate("/checkout")}> {" "} Checkout {" "} </button>
//         </div>
//       ) : (
//         <h1> Your Shopping Cart is empty</h1>
//       )}
//     </div>
//   );
// }

// export default Cart