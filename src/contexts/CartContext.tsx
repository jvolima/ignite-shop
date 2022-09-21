import { createContext, ReactNode, useState } from 'react'

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string; 
  priceInNumber: number;
}

interface CartContextType {
  productsInCart: Product[];
  addToCart: (product: Product) => void;
  removeProduct: (id: string) => void;
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
      return alert("O produto já está no carrinho.");
      // toastify error
    }

    setProductsInCart(oldState => [...oldState, product]);
  }
 
  function removeProduct(id: string) {
    const cartWithoutRemovedOne = productsInCart.filter(product => product.id !== id);
    setProductsInCart(cartWithoutRemovedOne);
  }

  return (
    <CartContext.Provider value={{
      productsInCart,
      addToCart,
      removeProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}