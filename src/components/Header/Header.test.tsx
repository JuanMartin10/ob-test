import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Header from './Header';
import WizardProvider from '../../context/Wizard.context';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('Testing <Header /> component', () => {
  const customRender = (ui: React.ReactElement) => {
    return render(<WizardProvider>{ui}</WizardProvider>);
  };

  beforeEach(() =>
    // eslint-disable-next-line testing-library/no-render-in-setup
    customRender(<Header />)
  );
  afterEach(cleanup);

  test('Should be rendered', () => {
    expect(screen.getByAltText('openbank-logo')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
  });
});
