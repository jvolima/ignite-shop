import { styled } from "../../styles";

export const SidebarContainer = styled("div", {
  position: 'absolute',
  height: '100%',
  width: '33%', 
  top: 0,
  right: 0,
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',

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

export const ProductsList = styled("div", {
  marginTop:  '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const Checkout = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  padding: '0 3rem 3rem'
})

export const CheckoutInfos = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const Quantity = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h3: {
    color: '$gray100',
    fontSize: '1rem',
    fontWeight: 400,
  },

  span: {
    color: '$gray300',
    fontSize: '$md',
    fontWeight: 400,
  }
})

export const Price = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h3: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 700,
  },

  span: {
    color: '$gray300',
    fontSize: '$xl',
    fontWeight: 700,
  }
})

export const CheckoutButton = styled("button", {
  cursor: 'pointer',
  marginTop: '3.5rem',
  padding: '1.25rem 0',
  background: '$green500',
  borderRadius: 8,
  border: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  fontSize: '$md',
  fontWeight: 700,

  '&:hover': {
    background: '$green300',
  }
})

export const EmptyCart = styled("div", {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  h2: {
    color: '$gray300',
    fontSize: '2rem'
  },

  svg: {
    color: '$gray300'
  }
})