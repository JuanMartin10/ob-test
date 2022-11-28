import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../CustomComponents/Input';
import './Step2.scss';

interface Step2Props {
  register: any;
  getValues: any;
  errors: any;
}
const Step2: React.FC<Step2Props> = props => {
  const { register, errors, getValues } = props;
  const { password: pwd } = getValues();
  const { t } = useTranslation();

  return (
    <>
      <div
        className="pm--textInfo"
        dangerouslySetInnerHTML={{ __html: t('wizard_step2_intro') }}
      />

      <div className="pm--pwds">
        <Input
          id="password"
          data-testid="password"
          type="password"
          label={t('Crea tu Contraseña Maestra')}
          register={register}
          required={{
            required: t('Campo obligatorio'),
            minLength: {
              value: 8,
              message: t('La longitud mínima es 8 caracteres'),
            },
            maxLength: {
              value: 24,
              message: t('La longitud máximas es de 24 caracteres'),
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/,
              message: t('Formato incorrecto'),
            },
          }}
          errors={errors?.password}
        />

        <Input
          id="confirmPassword"
          data-testid="confirmPassword"
          type="password"
          label={t('Repite tu Contraseña Maestra')}
          register={register}
          required={{
            required: t('Campo obligatorio'),
            validate: {
              matchesPreviousPassword: (value: string) => {
                return pwd === value || 'Las contraseñas no son iguales';
              },
            },
          }}
          errors={errors?.confirmPassword}
        />
      </div>

      <div
        className="pm--textInfo"
        dangerouslySetInnerHTML={{ __html: t('wizard_step2_hint') }}
      />

      <Input
        id="hint"
        label={t('Crea tu pista para recordar tu contraseña (opcional)')}
        register={register}
        maxNum={60}
        maxLength={60}
      />
    </>
  );
};

export default Step2;
