import { createContext, useState } from "react";



const CartContext = createContext();
export function CartProvider({ children }) {
    const [value, setValue] = useState();
    const add = (v) => {
        setValue(v);
    }
    return (
        <CartContext.Provider value={{ value, add }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContext;