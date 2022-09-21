import { SmileySad, X } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductCard } from "./ProductCard";
import { Checkout, CheckoutButton, CheckoutInfos, CloseContainer, Content, EmptyCart, Price, ProductsList, Quantity, SidebarContainer } from "./styles";

interface SidebarProps {
  closeSidebar: () => void;
}

export function Sidebar({ closeSidebar }: SidebarProps) {
  const { productsInCart } = useContext(CartContext);

  return (
    <SidebarContainer>
      <CloseContainer>
        <div />
        <button onClick={closeSidebar}>
          <X size={24} />
        </button>
      </CloseContainer>
      
      {
        productsInCart.length > 0 ? (
          <>
            <Content>
              <h1>Sacola de compras</h1>

              <ProductsList>
                {productsInCart.map(product => (
                  <ProductCard 
                    key={product.id} 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                  />
                ))}
              </ProductsList>
            </Content>
            
            <Checkout>
              <CheckoutInfos>
                <Quantity>
                  <h3>Quantidade</h3>
                  <span>{productsInCart.length} itens</span>
                </Quantity>
                <Price>
                  <h3>Valor total</h3>
                  <span>R$ 270,00</span>
                </Price>
              </CheckoutInfos>

              <CheckoutButton>Finalizar compra</CheckoutButton>
            </Checkout>
          </>
        ) : (
          <EmptyCart>
            <h2>Seu carrinho está vazio</h2>
            <SmileySad size={32} />
          </EmptyCart>
        )
      }

    </SidebarContainer>
  )
}