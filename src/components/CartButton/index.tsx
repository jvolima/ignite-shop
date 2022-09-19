import { Handbag } from "phosphor-react";
import { CartButtonContainer, QuantityContainer } from "./styles";

export function CartButton() {
  const quantity = 0;

  return (
    <CartButtonContainer>
      { quantity >= 1 && (
        <QuantityContainer>
          <span>{quantity}</span>
        </QuantityContainer>
      )}
      <Handbag size={24} />
    </CartButtonContainer>
  )
}