import { createContext, useState } from 'react';

export const WizardContext = createContext<any>(null);

const WizardProvider = ({ children }: any) => {
  const INITIAL_STEP = 1;
  const [step, setStep] = useState<number>(INITIAL_STEP);
  const [loading, setLoading] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);
  const [dispatchState, setDispatchState] = useState<any>(null);

  const restartStates = () => {
    setLoading(false);
    setAccept(false);
    setStep(INITIAL_STEP);
    setDispatchState(null);
  };
  return (
    <WizardContext.Provider
      value={{
        INITIAL_STEP,
        step,
        loading,
        accept,
        dispatchState,
        setStep,
        setLoading,
        setAccept,
        setDispatchState,
        restartStates,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export default WizardProvider;
