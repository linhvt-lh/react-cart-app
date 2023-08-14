/**
 * @jest-environment jsdom
 */
import React from "react";
import BlogSingle from "../page/BlogSingle";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe('Blog Single', () => {
    it ('Test snapshot testing', () => {
        const { asFragment } = render(<BlogSingle />);
        expect(asFragment(<BlogSingle />)).toMatchSnapshot();
    });

    it( 'Blog Single should render correctly', () => {
        let { getByTestId } = render(<BlogSingle />);
        expect( getByTestId('loading').textContent).toBe('Loading...');
    });
});