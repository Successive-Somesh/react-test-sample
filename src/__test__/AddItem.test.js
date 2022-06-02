import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddItem from '../components/AddItem';
import App from './../App';

describe('Item Testing',()=>{
    it('Input field initial value is OK', () => {
        render(<AddItem />);
        const inputElement = screen.getByPlaceholderText(/enter item name/i);
        const listItems = screen.queryAllByRole("list");
        expect(listItems.length).toBe(0);
        
        
      });

      it('Input field accepting value is OK', () => {
        render(<AddItem />);
        const inputElement = screen.getByPlaceholderText(/enter item name/i);
        fireEvent.change(inputElement, {target:{value:"abcd"}});
        expect(inputElement.value).toBe("abcd");
        
      });
    
      it('ListItems getting added is OK', () => {
        render(<App />);
        const inputElement = screen.getByPlaceholderText(/enter item name/i);
        const button = screen.getByRole("add-button");
        //console.log(button);

        fireEvent.change(inputElement, {target:{value:"abcd"}});
        userEvent.click(button);

        fireEvent.change(inputElement, {target:{value:"xyz"}});
        userEvent.click(button);

        fireEvent.change(inputElement, {target:{value:"qwerty"}});
        userEvent.click(button);

        const listItems =  screen.queryAllByText("some desc");
        expect(listItems.length).toBeGreaterThan(1);
      });
})
