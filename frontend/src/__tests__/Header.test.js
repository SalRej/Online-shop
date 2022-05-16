import { render , screen , cleanup } from '@testing-library/react';
import Header from '../../components/Header/Header';
import '@testing-library/jest-dom';


afterEach(()=>cleanup());
test("Does header renders",()=>{
    render(<Header />);
    const headerElement = screen.getByTestId('header-test');
    expect(headerElement).toBeInTheDocument();
})