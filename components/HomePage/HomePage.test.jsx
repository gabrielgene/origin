import HomePage from './HomePage';
import { fireEvent, render, screen } from '@testing-library/react';

import { handleNextMonth } from 'utils/month';

describe('<HomePage />', () => {
  it('should render properly', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });

  describe('Money input', () => {
    it('should allow only numbers', () => {
      render(<HomePage />);
      const input = screen.queryByTestId('amount-input');

      fireEvent.change(input, { target: { value: 'aaa' } });

      const amountText = screen.queryByTestId('monthly-amount');
      expect(amountText).toHaveTextContent('$0.00');
    });

    it('should display the value formmatted as money (e.g 3500.45 should be 3,500.45)', () => {
      render(<HomePage />);
      const input = screen.queryByTestId('amount-input');

      fireEvent.change(input, { target: { value: '3500.45' } });

      const amountText = screen.queryByTestId('monthly-amount');
      expect(amountText).toHaveTextContent('$3,500.45');
    });

    it('should display the value formmatted as money (e.g 350000 should be 3,500.00)', () => {
      render(<HomePage />);
      const input = screen.queryByTestId('amount-input');

      fireEvent.change(input, { target: { value: '350000' } });

      const amountText = screen.queryByTestId('monthly-amount');
      expect(amountText).toHaveTextContent('$3,500.00');
    });

    it('should display the value formmatted as money (e.g 10000 should be 100.00)', () => {
      render(<HomePage />);
      const input = screen.queryByTestId('amount-input');

      fireEvent.change(input, { target: { value: '10000' } });

      const amountText = screen.queryByTestId('monthly-amount');
      expect(amountText).toHaveTextContent('$100.00');
    });
  });

  describe('Date input', () => {
    it('should allow only future months (new Date() = "2022-12-07")', () => {
      const nextMonth = handleNextMonth();
      render(<HomePage />);

      const monthValue = screen.queryByTestId('month-value');
      const yearValue = screen.queryByTestId('year-value');
      const reachDate = screen.queryByTestId('reachDate-input');
      const previousMonthElement = screen.queryByTestId('previous-month');

      expect(monthValue).toHaveTextContent('January');
      expect(yearValue).toHaveTextContent('2023');
      expect(reachDate.value).toEqual(`${nextMonth.getTime()}`);
      expect(previousMonthElement).toBeDisabled();

      fireEvent.click(previousMonthElement);

      expect(monthValue).toHaveTextContent('January');
      expect(yearValue).toHaveTextContent('2023');
    });

    it('should click on the arrow buttons and navigate', () => {
      render(<HomePage />);

      const monthValue = screen.queryByTestId('month-value');
      const yearValue = screen.queryByTestId('year-value');
      const previousMonthElement = screen.queryByTestId('previous-month');
      const nextMonthElement = screen.queryByTestId('next-month');

      expect(monthValue).toHaveTextContent('January');
      expect(yearValue).toHaveTextContent('2023');

      fireEvent.click(nextMonthElement);

      expect(monthValue).toHaveTextContent('February');
      expect(yearValue).toHaveTextContent('2023');

      fireEvent.click(previousMonthElement);

      expect(monthValue).toHaveTextContent('January');
      expect(yearValue).toHaveTextContent('2023');
    });

    it('should be able to move the months by typing the Left and Right arrow key on the keyboard', () => {
      render(<HomePage />);

      const monthValue = screen.queryByTestId('month-value');
      const yearValue = screen.queryByTestId('year-value');
      const monthlyPickerElement = screen.queryByTestId('monthly-picker');

      expect(monthValue).toHaveTextContent('January');
      expect(yearValue).toHaveTextContent('2023');

      // only allow future months
      fireEvent.keyDown(monthlyPickerElement, {
        key: 'ArrowLeft',
      });

      expect(monthValue).toHaveTextContent('January');
      expect(yearValue).toHaveTextContent('2023');

      fireEvent.keyDown(monthlyPickerElement, {
        key: 'ArrowRight',
      });

      expect(monthValue).toHaveTextContent('February');
      expect(yearValue).toHaveTextContent('2023');

      fireEvent.keyDown(monthlyPickerElement, {
        key: 'ArrowLeft',
      });

      expect(monthValue).toHaveTextContent('January');
      expect(yearValue).toHaveTextContent('2023');
    });
  });
});
