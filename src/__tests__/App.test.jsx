/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/react'
import App from "../App.js";

//mock function
jest.mock("../page/Cart.jsx", () => {
  return {};
});

jest.mock("../component/Cart/CartWidget.jsx", () => {
  return {};
});

jest.mock("../slices/cartReducer.js", () => {
  return {
    cart : {}
  };
});


describe('App', () => {
  it('Should render corectly', () => {
    const { asFragment } = render(<App />)
  })
})
