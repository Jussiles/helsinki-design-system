import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';

describe('<Breadcrumb /> spec', () => {
  const defaultProps: BreadcrumbProps = {
    ariaLabel: 'Breadcrumb',
    list: [
      { title: 'Home', path: '/' },
      { title: 'Level 1', path: '/level1' },
      { title: 'Level 2', path: '/level2' },
      { title: 'Level 3', path: '/level3' },
      { title: 'Current', path: null },
    ],
  };
  it('renders the component', () => {
    const { asFragment } = render(<Breadcrumb {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Breadcrumb {...defaultProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('Mobile view renders the last item with a path. That item is rendered twice: in the desktop and mobile views.', async () => {
    const { getAllByText, getByText, container } = render(<Breadcrumb {...defaultProps} />);
    const defaultList = defaultProps.list;
    expect(container.querySelectorAll('nav')).toHaveLength(1);
    defaultList.forEach((item) => {
      if (!item.path) {
        expect(() => getByText(item.title, { selector: 'span' })).not.toThrow();
      } else if (item.path === defaultList[3].path) {
        expect(getAllByText(item.title, { selector: 'a' })).toHaveLength(2);
      } else {
        expect(() => getByText(item.title, { selector: 'a' })).not.toThrow();
      }
    });
  });
  it('returns null if there are no items with paths.', async () => {
    const { container } = render(
      <Breadcrumb
        {...defaultProps}
        list={[
          { title: 'Home', path: null },
          { title: 'Current', path: null },
        ]}
      />,
    );
    expect(container.querySelectorAll('nav')).toHaveLength(0);
  });
  it('ariaLabel is set to the nav element.', async () => {
    const { container } = render(<Breadcrumb {...defaultProps} />);
    const nav = container.querySelectorAll('nav')[0] as HTMLElement;
    expect(nav.getAttribute('aria-label')).toBe(defaultProps.ariaLabel);
  });
});
