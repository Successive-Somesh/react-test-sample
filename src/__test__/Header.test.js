import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Testing',()=>{
    it('Header Without Props', () => {
        render(<Header />);
        const elements = screen.getAllByRole("heading");
        expect(elements.length).toBe(3);
      });

      it('Header With Props', () => {
        render(<Header brandname="abc" />);  const elements = screen.getByText("abc")
        expect(elements).toHaveTextContent("abc")
        const paragraph = screen.getByTestId("brand")
        expect(paragraph).toBeVisible()
      })

})
