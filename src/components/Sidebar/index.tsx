import axios from "axios";
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

  const totalPrice = productsInCart.reduce((acc, item) => {
    return acc += item.priceInNumber
  }, 0);

  async function handleBuyProduct() {
    try {
      const response = await axios.post('/api/checkout', {
        pricesIds: productsInCart.map(product => {
          return product.defaultPriceId
        })
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      alert('Falha ao redirecionar ao checkout!');
    }
  }

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
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </Price>
              </CheckoutInfos>

              <CheckoutButton onClick={handleBuyProduct}>Finalizar compra</CheckoutButton>
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