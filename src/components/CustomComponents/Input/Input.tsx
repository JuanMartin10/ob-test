import React, { useEffect, useState } from 'react';
import eyeOff from '../../../assets/icons/eye-off.svg';
import eyeOn from '../../../assets/icons/eye-on.svg';

import './input.scss';

interface InputProps {
  id: string;
  label: string;
  register: any;
  type: string;
  errors: any;
  required: any;
  maxNum: number;
}
const Input: React.FC<InputProps> = props => {
  const {
    id,
    label,
    register,
    type = 'text',
    errors = {},
    required = {},
    maxNum = null,
    ...rest
  } = props;
  const [showPass, setShowPass] = useState(type === 'password' ? false : true);
  const [inputType, setInputType] = useState(type);
  const [focus, setFocus] = useState(false);
  const [currentLength, setCurrentLength] = useState(0);

  const HandlerChangeType = (e: any) => {
    e.preventDefault();
    setShowPass(s => !s);
  };

  const HandlerChangeCapture = (e: any) => {
    setCurrentLength(e.target.value.length);
  };

  useEffect(() => {
    if (type === 'password') {
      const newType = showPass ? 'text' : 'password';
      setInputType(newType);
    }
  }, [showPass]);

  return (
    <div className="inputForm">
      <label className="inputForm--label" htmlFor={id}>
        {label}
      </label>
      <div
        className={`inputForm--box ${focus ? 'isActive' : ''} ${
          errors.message ? 'isError' : ''
        }`}
      >
        <input
          className="inputForm--input"
          type={inputType}
          id={id}
          {...register(id, { ...required })}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeCapture={HandlerChangeCapture}
          {...rest}
        />
        {type === 'password' && (
          <button
            className="button iconButton transparent"
            onClick={e => HandlerChangeType(e)}
          >
            {showPass ? (
              <img src={eyeOff} alt="password" width={20} />
            ) : (
              <img src={eyeOn} alt="password" width={20} />
            )}
          </button>
        )}
      </div>
      {maxNum && (
        <p className="inputForm--length">
          {currentLength}/{maxNum}
        </p>
      )}
      {errors.message && <p className="inputForm--error">{errors.message}</p>}
    </div>
  );
};

export default React.memo(Input);
