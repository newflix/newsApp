import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../SearchBar/SearchBar';

test('should search bar component render',()=>{
    render(<SearchBar/>);
    const headerElement = screen.getByTestId('search-1');
    expect(headerElement).toBeInTheDocument();
})