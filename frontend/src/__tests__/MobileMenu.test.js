import { render , screen , cleanup } from '@testing-library/react';
import MobileMenu from '../../components/Header/MobileMenu';
import '@testing-library/jest-dom';

afterEach(()=>cleanup());
test("Does mobile menu renders and has prop as a function",()=>{
    const toogleShow = () => {};

    render(<MobileMenu toogleShow={toogleShow}/>);
    const footerElement = screen.getByTestId('mobile-menu-test');
    expect(footerElement).toBeInTheDocument();
    expect(typeof(toogleShow)).toBe('function');
})
