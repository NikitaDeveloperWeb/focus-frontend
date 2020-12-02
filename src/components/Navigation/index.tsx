import React from 'react';
import { Link } from 'react-router-dom';
//img
import logo from '../../assets/img/logo.png';
//icons
import LanguageIcon from '@material-ui/icons/Language';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import axios from 'axios';

import Brightness4Icon from '@material-ui/icons/Brightness4';

function Navigations() {
  //массив элементов
  const linkList = [
    {
      link: (
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo_img" />
          </Link>
        </div>
      ),
    },
    {
      link: <Link to="/home/news">News</Link>,
    },
    {
      link: <Link to="/home/add">Add post</Link>,
    },
    {
      link: <Link to="/home/search">Search</Link>,
    },
  ];

  //язык
  //состояние объявленного языка
  let [langOpen, setlangOpen] = React.useState(false);
  //функция для смены состояния
  const openBlockLang = (lang: boolean) => {
    setlangOpen(!lang);
  };

  //Выбранный пункт меню
  const [activeItem, setActiveItem] = React.useState(0);
  const onSelectItem = (index: number) => {
    setActiveItem(index);
  };

  const logout = async () => {
    await axios.get('https://focus-network.herokuapp.com/logout').then(() => {
      // localStorage.removeItem('token');
      // console.log(localStorage.getItem('token'));
      // window.localStorage.clear();
      // window.location.reload();
      console.log('logout');
    });
  };
  const [theme, setTheme] = React.useState(true);

  const handleTheme = (theme: boolean) => {
    setTheme(!theme);
    if (theme) {
      document.body.setAttribute('data-theme', 'ligth');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <header className="nav_ligth">
      <nav>
        <ul>
          {linkList.map((obj, index) => (
            <li
              key={index}
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'activeItem' : 'disableItem'}>
              {obj.link}
            </li>
          ))}
        </ul>
      </nav>
      <div className="setting">
        <ul>
          <li>
            <LanguageIcon
              className={langOpen === true ? 'active' : 'disablet'}
              onClick={() => openBlockLang(langOpen)}
            />
            <div className={langOpen === true ? 'langOpen' : 'langClose'}>
              <ul>
                <li>English</li>
                <li>Русский</li>
              </ul>
            </div>
          </li>
          <li onClick={() => handleTheme(theme)}>
            {(theme && <Brightness4Icon />) || <Brightness5Icon />}
          </li>
          <li onClick={() => logout()}>
            <Link to="/">
              <PowerSettingsNewIcon />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navigations;
