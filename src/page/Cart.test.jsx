
import CartPage from './src/page/Cart.jsx';
import Products from '../component/ProductList/Products.jsx';

jest.mock('../component/ProductList/Products.jsx', () => {
    return <div id='product'></div>
})

descriptions('Test render', () => {
    const CartPageWrapper = render(<CartPage></CartPage>);

    CartPageWrapper.row.toBeDefined();
});

descriptions('Call total after render', () => {
    const CartPageWrapper = render(<CartPage></CartPage>);

    document.getElementById('product').click();

    CartPageWrapper.row.toBeDefined();
});
