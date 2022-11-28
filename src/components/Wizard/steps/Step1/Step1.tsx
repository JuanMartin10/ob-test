import React from 'react';
import { useTranslation } from 'react-i18next';

import img1 from '../../../../assets/img/group.svg';
import img2 from '../../../../assets/img/group-3.svg';

import './Step1.scss';

interface Step1Props {
  actionCheck: any;
  accept: boolean;
}

const Step1: React.FC<Step1Props> = ({ actionCheck, accept }) => {
  const { t } = useTranslation();
  return (
    <>
      <ol className="info--picts">
        <li>
          <figure>
            <img src={img1} alt={t('wizard_step1_caption1')} />
            <figcaption>{t('wizard_step1_caption1')}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={img2} alt={t('wizard_step1_caption2')} />
            <figcaption>{t('wizard_step1_caption2')}</figcaption>
          </figure>
        </li>
      </ol>
      <h3 className="h3">{t('como_funciona_title')}</h3>
      <p>{t('como_funciona_desc')}</p>
      <h3 className="h3">{t('que_guardar_title')}</h3>
      <p>{t('que_guardar_desc')}</p>

      <div className="info--check">
        <input
          type="checkbox"
          name="adult"
          id="adult"
          onChange={actionCheck}
          checked={accept}
        />
        <label
          htmlFor="adult"
          dangerouslySetInnerHTML={{ __html: t('wizard_step1_label') }}
        />
      </div>
    </>
  );
};

export default Step1;
