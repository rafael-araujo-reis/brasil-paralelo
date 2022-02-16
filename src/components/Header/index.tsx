import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.hero}>
        <img src="./images/logo.svg" alt="Logo Brasil Paralelo" />
        <p>Entretenimento e Educação</p>
        <SignInButton />
      </div>
    </header>
  );
}