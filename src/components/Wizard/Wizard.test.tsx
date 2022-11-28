import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Wizard from './Wizard';
import WizardProvider from '../../context/Wizard.context';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('Testing <Wizard /> component', () => {
  const customRender = (ui: React.ReactElement) => {
    return render(<WizardProvider>{ui}</WizardProvider>);
  };

  beforeEach(() =>
    // eslint-disable-next-line testing-library/no-render-in-setup
    customRender(<Wizard />)
  );
  afterEach(cleanup);

  test('Should be rendered', () => {
    expect(screen.getByTestId('userForm')).toBeInTheDocument();
  });
});
