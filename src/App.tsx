import WizardProvider from './context/Wizard.context';

import Layout from './components/layout/Layout';
import Wizard from './components/Wizard/Wizard';

import './App.scss';

function App() {
  return (
    <WizardProvider>
      <Layout>
        <Wizard />
      </Layout>
    </WizardProvider>
  );
}

export default App;
