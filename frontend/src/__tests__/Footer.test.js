import { render , screen , cleanup } from '@testing-library/react';
import Footer from '../../components/Footer/Footer';
import '@testing-library/jest-dom';

afterEach(()=>cleanup());
test("Does footer renders",()=>{
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-test');
    expect(footerElement).toBeInTheDocument();

})
