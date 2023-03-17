import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.size.xxbig,
      'text-transform': 'none',
    });
  });

  it('should render with withe color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes - xxsmall', () => {
    renderTheme(<Heading size="xxsmall">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xxsmall,
    });
  });

  it('should render correct heading sizes - xsmal', () => {
    renderTheme(<Heading size="xsmall">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xsmall,
    });
  });

  it('should render correct heading sizes - small', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.small,
    });
  });

  it('should render correct heading sizes - medium', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.medium,
    });
  });

  it('should render correct heading sizes - big', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.big,
    });
  });

  it('should render correct heading sizes - xbig', () => {
    renderTheme(<Heading size="xbig">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xbig,
    });
  });

  it('should render correct heading sizes - xxbig', () => {
    renderTheme(<Heading size="xxbig">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xxbig,
    });
  });

  it('should render correct heading size when using mobile', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.size.medium, { media: theme.mediaQuerie.mediumQuerie });
  });

  it('should render correct heading when using UpperCase', () => {
    renderTheme(<Heading uppercase={true}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({ 'text-transform': 'uppercase' });
  });

  it('should render correct element h1', () => {
    const { container } = renderTheme(<Heading as="h1">Texto</Heading>);
    const h6 = container.querySelector('h1');

    expect(h6.tagName.toLowerCase()).toBe('h1');
  });

  it('should render correct element h2', () => {
    const { container } = renderTheme(<Heading as="h2">Texto</Heading>);
    const h6 = container.querySelector('h2');

    expect(h6.tagName.toLowerCase()).toBe('h2');
  });

  it('should render correct element h3', () => {
    const { container } = renderTheme(<Heading as="h3">Texto</Heading>);
    const h6 = container.querySelector('h3');

    expect(h6.tagName.toLowerCase()).toBe('h3');
  });

  it('should render correct element h4', () => {
    const { container } = renderTheme(<Heading as="h4">Texto</Heading>);
    const h6 = container.querySelector('h4');

    expect(h6.tagName.toLowerCase()).toBe('h4');
  });

  it('should render correct element h5', () => {
    const { container } = renderTheme(<Heading as="h5">Texto</Heading>);
    const h6 = container.querySelector('h5');

    expect(h6.tagName.toLowerCase()).toBe('h5');
  });

  it('should render correct element h6', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
