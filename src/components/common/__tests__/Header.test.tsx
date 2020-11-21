import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

describe('<Header />', () => {
  const setup = () => {
    render(
      <Header
        title="Header"
        navItems={[
          { navItem: 'link1', link: '/link1' },
          { navItem: 'link2', link: '/link2' },
          { navItem: 'link3', link: '/link3' },
          { navItem: 'link4', link: '/link4' },
        ]}
      />,
    );
  };

  it('should render a logo link and nav links', () => {
    setup();

    const logoText = screen.getByRole('link', { name: 'Header' });
    const navItem1 = screen.getByRole('link', { name: 'link1' });
    //Rest of the nav items
    expect(logoText).toBeVisible();
    expect(navItem1).toBeVisible();
  });

  it('should hide nav list and show toggle button when device size less than 768px', () => {
    // window = Object.assign(window, { innerWidth: 500 });
    // setup();
    // const toggleBtn = screen.getByRole('button', { name: /☰/i });
  });
});
