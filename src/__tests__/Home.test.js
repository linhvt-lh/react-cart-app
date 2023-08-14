import Home from "../page/Home";
import { render } from "@testing-library/react";

describe('Home', () => {
    it( 'Home should render correctly', () => {
        let { renderHome } = render(<Home />);
        expect(renderHome(<Home />)).contain('<div></div>');
    })
    
});