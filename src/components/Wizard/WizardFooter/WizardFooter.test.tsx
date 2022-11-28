import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import WizardFooter from './WizardFooter';
import WizardProvider from '../../../context/Wizard.context';
import Wizard from '../Wizard';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('Testing <WizardFooter /> component', () => {
  const customRender = (ui: React.ReactElement) => {
    return render(<WizardProvider>{ui}</WizardProvider>);
  };

  beforeEach(() =>
    // eslint-disable-next-line testing-library/no-render-in-setup
    customRender(<WizardFooter />)
  );
  afterEach(cleanup);

  test('Should be rendered', () => {
    expect(screen.getByText('siguiente')).toBeInTheDocument();
  });

  test('Button Next should be disabled on Step1 init', () => {
    expect(screen.getByTestId('btnNext')).toBeDisabled();
  });

  test('Button Next should be ensabled on Step1 when checkbox is checked', () => {
    customRender(<Wizard />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
