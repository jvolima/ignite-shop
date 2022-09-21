import Image from "next/future/image";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { ImageContainer, Infos, ProductCardContainer } from "./styles";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ id, name, price, imageUrl }: ProductCardProps) {
  const { removeProduct } = useContext(CartContext);

  function handleRemoveProduct() {
    removeProduct(id);
  }

  return (
    <ProductCardContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="" width={94} height={94} />
      </ImageContainer>

      <Infos>
        <h3>{name}</h3>
        <h4>{price}</h4>

        <button onClick={handleRemoveProduct}>Remover</button>
      </Infos>
    </ProductCardContainer>
  )
}