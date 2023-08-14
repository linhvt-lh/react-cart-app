/**
 * @jest-environment jsdom
 */

import { cleanup, fireEvent, render, waitForElement } from "@testing-library/react";
import Counter from "../page/Counter";
import { getTotalPoint } from "../page/Counter";


afterEach(cleanup);

describe('Test Counter run correctly' , () => {
    
    it('Test increments Counter', () => {
        const { getByTestId  } = render(<Counter />);
        fireEvent.click(getByTestId('button-up'));
        expect(getByTestId('counter').textContent).toBe('1');
    }); 

    it('Test decrements Counter', () => {
        const { getByTestId  } = render(<Counter />);
        fireEvent.click(getByTestId('button-down'));
        expect(getByTestId('counter').textContent).toBe('-1');
    }) 

    it('Test Aync function Counter', async () =>{
        const { getByTestId, getByText } = render(<Counter />);
        fireEvent.click(getByTestId('button-up-async'));
        const counter = await waitForElement(() =>getByText('1'))
        expect(getByTestId('counter-async').textContent).toBe('1');
    })
    
    it('Test calculate point correctly', () => {
        const mock = jest.fn(() => getTotalPoint);
        console.log(mock);
        expect(mock()).toBe(10);
    })

})

