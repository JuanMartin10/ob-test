import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import WizardProvider from '../../context/Wizard.context';
import Layout from './Layout';
import Step1 from '../Wizard/steps/Step1/Step1';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('Testing <Layout /> component', () => {
  const customRender = (ui: React.ReactElement) => {
    return render(<WizardProvider>{ui}</WizardProvider>);
  };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    customRender(
      <Layout>
        <p>Layout</p>
      </Layout>
    );
  });
  afterEach(cleanup);

  test('Should be rendered', () => {
    expect(screen.getByAltText('openbank-logo')).toBeInTheDocument();
    render(<Step1 actionCheck={() => {}} accept={false} />);
  });
});
