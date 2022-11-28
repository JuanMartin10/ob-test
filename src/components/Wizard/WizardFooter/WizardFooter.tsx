import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WizardContext } from '../../../context/Wizard.context';
import loadingIcon from '../../../assets/icons/loader.svg';
import './WizardFooter.scss';

const WizardFooter = () => {
  const { t } = useTranslation();
  const [nextButton, setNextButton] = useState<boolean>(false);

  const { INITIAL_STEP, step, setStep, loading, accept, dispatchState, restartStates } =
    useContext(WizardContext);

  const HandlerNext = () => {
    switch (step) {
      case 1:
        setStep((step: number) => step + 1);
        break;
      case 2:
        const userForm = document.getElementById('userForm');
        userForm?.dispatchEvent(new Event('submit', { cancelable: true }));
        break;
      case 3:
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (accept === true) {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  }, [accept]);

  const renderStepFinal = () => (
    <>
      {dispatchState === 'ok' ? (
        <button
          className="button"
          data-testid="btnNextFinal"
          onClick={() => setStep(INITIAL_STEP)}
        >
          {t('acceder')}
        </button>
      ) : (
        <button
          className="button transparent"
          data-testid="btnCancelFinal"
          onClick={() => restartStates()}
        >
          {t('reiniciar')}
        </button>
      )}
    </>
  );

  return (
    <footer className="wizard--footer">
      {step === 3 ? (
        renderStepFinal()
      ) : (
        <>
          <button
            id="nextButton"
            data-testid="btnNext"
            className="button secondary"
            onClick={HandlerNext}
            disabled={!nextButton || loading}
            // type="submit"
          >
            {loading ? (
              <img
                src={loadingIcon}
                width={30}
                alt="loading-spinner"
                className="spinner"
              />
            ) : (
              t('siguiente')
            )}
          </button>
          {step !== INITIAL_STEP && (
            <button
              className="button transparent"
              data-testid="btnCancel"
              onClick={() => setStep(INITIAL_STEP)}
            >
              {t('cancelar')}
            </button>
          )}
        </>
      )}
    </footer>
  );
};

export default WizardFooter;
