import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  // em in breakpoints
  const emSize = sizes[label] / 16
  acc[label] = (...args) => css`
  @media (max-width: ${emSize}em) {
    ${css(...args)}
  }
  `
})
