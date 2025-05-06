import clsx from 'clsx';

import { useTheme } from '../../contexts/ThemeContext';

import styles from './Button.module.css';

function Button({ children, onClick= () => {}, type = "button" }) {
  const { isDarkTheme } = useTheme();

  return (
    <button 
      className={clsx(styles["button"], isDarkTheme && styles["dark"])}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;