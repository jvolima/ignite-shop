import { styled } from "../../styles";

export const SidebarContainer = styled("div", {
  position: 'absolute',
  height: '100%',
  width: '33%', 
  top: 0,
  right: 0,
  zIndex: 1,

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
})

export const CloseContainer = styled("div", {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1.5rem',

  button: {
    border: 0,
    background: 'transparent',
    cursor: 'pointer',

    '&:hover': {
      svg: {
        color: '$gray300'
      }
    },

    svg: {
      color: '$gray500',
    }
  }
})

export const Content = styled("div", {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 3rem',

  h1: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '$gray100'
  }
})