import { X } from "phosphor-react";
import { CloseContainer, Content, SidebarContainer } from "./styles";

interface SidebarProps {
  closeSidebar: () => void;
}

export function Sidebar({ closeSidebar }: SidebarProps) {
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
      </Content>
    </SidebarContainer>
  )
}