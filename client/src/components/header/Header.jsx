import clsx from 'clsx';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useTheme } from '../../contexts/ThemeContext';
import Button from '../button/Button';

import styles from './Header.module.css';

function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header className={clsx(styles["header"], isDarkTheme && styles["dark"])}>
      <h1 className={clsx(isDarkTheme && styles["dark"])}>ToDo List</h1>

      <Button onClick={toggleTheme}>
        {isDarkTheme ? <FiSun /> : <FiMoon />}
      </Button>
    </header>
  );
}

export default Header;