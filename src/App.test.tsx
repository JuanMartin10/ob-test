import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import WizardProvider from './context/Wizard.context';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

// test('renders learn react link', () => {
//   render(<BaseApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Testing App component', () => {
  test('Component must be rendered', () => {
    render(
      <WizardProvider>
        <App />
      </WizardProvider>
    );
  });
});
