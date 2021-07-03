import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Check if app renders correctly', () => {
  render(<App />);

  // Expext title on screen
  expect(screen.getByTestId('CodingChallenge')).toBeInTheDocument();

  //Assert if all 3 cards are present
  const cards = document.querySelectorAll('div.card');
  expect(cards.length).toEqual(3);

  //Expect H2 in every card
  expect(cards[0]).toContainHTML('h2');
  expect(cards[1]).toContainHTML('h2');
  expect(cards[2]).toContainHTML('h2');
});



test("Check if form is present", () => {
    render(<App />);
    //Check if form is present
    expect(screen.getByTestId("formContainer")).toBeInTheDocument();

    //Assert if all inputs are present
    //Expecting 3 input fields
    const inputs = document.querySelectorAll('input');
    expect(inputs.length).toEqual(3);
})