import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Step1 from './Step1';
import WizardProvider from '../../../../context/Wizard.context';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('Testing <WizardFooter /> component', () => {
  const customRender = (ui: React.ReactElement) => {
    return render(<WizardProvider>{ui}</WizardProvider>);
  };
  const actionCheck = () => {};

  beforeEach(() =>
    // eslint-disable-next-line testing-library/no-render-in-setup
    customRender(<Step1 actionCheck={actionCheck} accept={false} />)
  );
  afterEach(cleanup);

  test('Should be rendered', () => {
    expect(screen.getByText('wizard_step1_caption1')).toBeInTheDocument();
  });

  test('Checkbox should be intialized to false', () => {
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('Checkbox should be true when checkbox changes', () => {
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    fireEvent.click(screen.getByRole('checkbox'));
    customRender(<Step1 actionCheck={actionCheck} accept={true} />);
  });
});
