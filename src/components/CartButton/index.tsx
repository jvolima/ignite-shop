import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartButtonContainer, QuantityContainer } from "./styles";

interface CartButtonProps {
  openSidebar: () => void;
}

export function CartButton({ openSidebar }: CartButtonProps) {
  const { productsInCart } = useContext(CartContext);

  return (
    <CartButtonContainer onClick={openSidebar} svg={productsInCart.length > 0 ? "withContent" : "empty"}>
      { productsInCart.length > 0 && (
        <QuantityContainer>
          <span>{productsInCart.length}</span>
        </QuantityContainer>
      )}
      <Handbag size={24} />
    </CartButtonContainer>
  )
}