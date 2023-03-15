import { render, screen } from '@testing-library/react';
import { renderTheme } from '../styles/render-theme';
import Home from './Home';

test('if renders Home', () => {
  render(renderTheme(<Home />));
});

test('if parent of heading exist', () => {
  render(renderTheme(<Home />));
  const headingParent = screen.getByRole('heading', { name: 'Hello' }).parentElement;
  expect(headingParent).toHaveStyleRule('background', 'red');
});
