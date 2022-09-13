import Image from "next/future/image";
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis inventore, magnam qui porro reiciendis fuga voluptatem esse quam omnis sunt vel voluptates deserunt odio enim laborum officia dignissimos harum.</p>
        
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}