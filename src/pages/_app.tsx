import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app";
import Image from "next/future/image";
import { CartButton } from "../components/CartButton";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { CartContextProvider } from "../contexts/CartContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleOpenSidebar() {
    setIsSidebarOpen(true);
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <CartContextProvider>
      { isSidebarOpen && <Sidebar closeSidebar={handleCloseSidebar} /> }
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <CartButton openSidebar={handleOpenSidebar} />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

