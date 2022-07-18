import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Index from '../pages/Index';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const pages = [
  {
    route: '/',
    heading: 'About this site',
    component: Index,
  },
  {
    route: '/about',
    heading: 'About Me',
    component: About,
  },
  {
    route: '/projects',
    heading: 'Projects',
    component: Projects,
  },
  {
    route: '/contact',
    heading: 'Contact',
    component: Contact,
  },
  {
    route: '/resume',
    heading: 'Resume',
    component: Resume,
  },
];

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('Renders 404 Page Component', () => {
  renderWithRouter(<NotFound />);
  const linkElement = screen.getByText(/Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});

const checkPageComponent = async (page) => {
  test(`Renders ${page.route} Component`, () => {
    window.scrollTo = () => {};
    renderWithRouter(<page.component />, { route: page.route });
    const linkElement = screen.getByTestId('heading');
    expect(linkElement).toHaveTextContent(page.heading);
  });
};

pages.forEach((page) => checkPageComponent(page));
