import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import burger from '../../assets/icons/burger.svg';
import logo from '../../assets/img/logo.png';
import { Langs } from './models';
import './header.scss';

const langs: Langs = {
  en: {
    tag: 'English',
    acr: 'EN',
  },
  es: {
    tag: 'Español',
    acr: 'ES',
  },
};

const Header = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const { i18n } = useTranslation();

  const HandlerToggleMenu = () => setViewMenu(!viewMenu);
  const HandlerChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setViewMenu(false);
  };

  return (
    <header id="header">
      <div className="container">
        <img width={150} src={logo} alt="logo" />
        <div className="tools">
          <button
            className="tools--toggle button transparent iconButton"
            onClick={HandlerToggleMenu}
          >
            <img width={40} src={burger} alt="burger" />
          </button>
          <div className={`language ${viewMenu ? 'showMenu' : ''}`}>
            {Object.keys(langs).map(lang => {
              return (
                <button
                  key={lang}
                  type="submit"
                  className="button transparent"
                  onClick={() => HandlerChangeLang(lang)}
                >
                  {(langs as any)[lang].tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
