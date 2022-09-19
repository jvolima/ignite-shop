import { Handbag } from "phosphor-react";
import { CartButtonContainer, QuantityContainer } from "./styles";

interface CartButtonProps {
  openSidebar: () => void;
}

export function CartButton({ openSidebar }: CartButtonProps) {
  const quantity = 0;

  return (
    <CartButtonContainer onClick={openSidebar} svg={quantity > 0 ? "withContent" : "empty"}>
      { quantity > 0 && (
        <QuantityContainer>
          <span>{quantity}</span>
        </QuantityContainer>
      )}
      <Handbag size={24} />
    </CartButtonContainer>
  )
}