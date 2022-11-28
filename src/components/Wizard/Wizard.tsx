import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import { WizardContext } from '../../context/Wizard.context';
import { setUser } from '../../lib/functions';
import Step1 from './steps/Step1/Step1';
import Step2 from './steps/Step2/Step2';
import Step3 from './steps/Step3/Step3';

import WizardHeader from './WizardHeader/WizardHeader';

import './wizard.scss';
import WizardFooter from './WizardFooter/WizardFooter';

interface IFormInput {
  password: string;
  confirmPassword: string;
  hint: string;
}

const Wizard = () => {
  const { t } = useTranslation();

  const {
    step,
    setStep,
    setLoading,
    accept,
    setAccept,
    dispatchState,
    setDispatchState,
  } = useContext(WizardContext);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'all' });

  const sentData = async (data: any) => {
    setLoading(true);
    const { password, confirmPassword, hint } = data;
    try {
      const result = await setUser(password, confirmPassword, hint);
      if (result) {
        setDispatchState(result);
        setLoading(false);
        setStep((step: number) => step + 1);
      }
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  };
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => sentData(data);

  const handlerAccept = () => {
    setAccept((a: boolean) => !a);
  };

  const renderStep = (step: number) => {
    if (step === 1) return <Step1 actionCheck={handlerAccept} accept={accept} />;
    if (step === 2)
      return <Step2 register={register} errors={errors} getValues={getValues} />;
    if (step === 3) return <Step3 dispatchState={dispatchState} />;
  };

  return (
    <section className="wizard">
      <WizardHeader />
      <form
        data-testid="userForm"
        id="userForm"
        onSubmit={handleSubmit(onSubmit)}
        className="wizard--content"
      >
        <h2 className="h2">{t('wizard_title')}</h2>

        {renderStep(step)}

        <WizardFooter />
      </form>
    </section>
  );
};

export default Wizard;
