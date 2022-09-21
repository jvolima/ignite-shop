import { X } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductCard } from "./ProductCard";
import { CloseContainer, Content, ProductsList, SidebarContainer } from "./styles";

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
    </SidebarContainer>
  )
}