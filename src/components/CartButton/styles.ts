import { styled } from "../../styles";

export const CartButtonContainer = styled("button", {
  position: 'relative',
  width: '3rem',
  height: '3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$gray800',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(1.2)',
  },

  variants: {
    svg: {
      "empty": { color: '$gray500' },
      "withContent": { color: '$gray300' }
    }
  }
});

export const QuantityContainer = styled("div", {
  position: 'absolute',
  width: '1.5rem',
  height: '1.5rem',
  top: -7,
  right: -7,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$green500',
  outline: '3px solid $gray900',
  borderRadius: 1000,

  span: {
    color: '$white',
    fontSize: '$sm',
    fontWeight: 'bold',
  }
})