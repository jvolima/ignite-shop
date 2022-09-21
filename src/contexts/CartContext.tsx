import { createContext, ReactNode, useState } from 'react'

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string; 
}

interface CartContextType {
  productsInCart: Product[];
  addToCart: (product: Product) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const productAlreadyInCart = productsInCart.find(item => item.id === product.id);

    if (productAlreadyInCart) {
      return alert("Produto já está no carrinho.");
      // toastify error
    }

    setProductsInCart(oldState => [...oldState, product]);
  }

  return (
    <CartContext.Provider value={{
      productsInCart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}