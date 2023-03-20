import { css } from "css";

export const mobile = (styles) => {
  return css`
    @media (max-width: 480px) {
      ${styles}
    }
  `;
};

export const tablet = (styles) => {
  return css`
    @media (max-width: 840px) {
      ${styles}
    }
  `;
};

export const laptop = (styles) => {
  return css`
    @media (max-width: 1024px) {
      ${styles}
    }
  `;
};
