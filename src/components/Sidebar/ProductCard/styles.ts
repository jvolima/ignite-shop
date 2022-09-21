import { styled } from "../../../styles";

export const ProductCardContainer = styled("div", {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem'
})

export const ImageContainer = styled("div", {
  width: '100%',
  maxWidth: 102,
  height: 94,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const Infos = styled("div", {
  h3: {
    fontSize: '$md',
    color: '$gray300',
    fontWeight: 400,
    lineHeight: '160%'
  },

  h4: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 700,
    lineHeight: '160%'
  },

  button: {
    cursor: 'pointer',
    marginTop: '0.5rem',
    background: 'transparent',
    border: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '1rem',
    color: '$green500',
    fontWeight: 700,

    '&:hover': {
      color: '$green300',
    }
  }
})