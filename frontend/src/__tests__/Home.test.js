import { render , screen , cleanup } from '@testing-library/react';
import Home from '../../pages/index';
import '@testing-library/jest-dom';


afterEach(()=>cleanup());
test("Does home page renders and take array as props",()=>{

    const products = [{
        id:0,
        imageLink:"imagelink",
        imageAlt:"imagealt",
        name:"name"
    }];

    render(<Home products={products}/>);
    const homeElement = screen.getByTestId('home-test');
    expect(homeElement).toBeInTheDocument();
    expect(Array.isArray(products)).toBe(true);
})