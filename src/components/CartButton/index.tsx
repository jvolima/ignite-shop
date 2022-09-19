import { Handbag } from "phosphor-react";
import { CartButtonContainer, QuantityContainer } from "./styles";

export function CartButton() {
  const quantity = 0;

  return (
    <CartButtonContainer svg={quantity > 0 ? "withContent" : "empty"}>
      { quantity > 0 && (
        <QuantityContainer>
          <span>{quantity}</span>
        </QuantityContainer>
      )}
      <Handbag size={24} />
    </CartButtonContainer>
  )
}