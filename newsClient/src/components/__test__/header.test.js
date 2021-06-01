import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header/Header';

test('should header component render',()=>{
    render(<Header/>);
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('UKNews');
})