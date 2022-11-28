import React from 'react';

import { useTranslation } from 'react-i18next';
import successIcon from '../../../../assets/icons/success.svg';
import errorIcon from '../../../../assets/icons/error.svg';

import './Step3.scss';

interface Step3Props {
  dispatchState: string;
}

const Step3: React.FC<Step3Props> = props => {
  const { t } = useTranslation();
  const { dispatchState } = props;

  const success = dispatchState !== 'ok';

  const messages = {
    icon: success ? successIcon : errorIcon,
    title: success ? t('title_succes') : t('title_error'),
    message: success ? t('msg_succes') : t('msg_error'),
    className: success ? 'success' : 'error',
  };

  return (
    <div className="pmFinsish">
      <img
        src={messages.icon}
        alt={'pepe'}
        width={20}
        className={`pmFinsish--icon is_${messages.className}`}
      />

      <div className="pmFinsish--textInfo">
        <h3 className="h3">{messages.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: messages.message }} />
      </div>
    </div>
  );
};

export default Step3;
