import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { WizardContext } from '../../../context/Wizard.context';
import './WizardHeader.scss';

const WizardHeader = () => {
  const { t } = useTranslation();
  const { step } = useContext(WizardContext);

  const checkStep = (pos: number) => {
    if (step === pos) return 'isActive';
    if (step > pos) return 'isDone';
    return '';
  };

  return (
    <ul className="wizard--steps">
      <li className={checkStep(1)}>
        <span>{t('step_info')}</span>
      </li>
      <li className={checkStep(2)}>
        <span>{t('step_form')}</span>
      </li>
      <li className={checkStep(3)}>
        <span>{t('step_end')}</span>
      </li>
    </ul>
  );
};

export default WizardHeader;
