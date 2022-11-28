import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import WizardProvider from '../../../../context/Wizard.context';
import Step3 from './Step3';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('Testing <Step3 /> component', () => {
  const customRender = (ui: React.ReactElement) => {
    return render(<WizardProvider>{ui}</WizardProvider>);
  };

  beforeEach(() =>
    // eslint-disable-next-line testing-library/no-render-in-setup
    customRender(<Step3 dispatchState={''} />)
  );
  afterEach(cleanup);

  test('Should be rendered', () => {
    expect(screen.getByText('title_succes')).toBeInTheDocument();
  });
});
