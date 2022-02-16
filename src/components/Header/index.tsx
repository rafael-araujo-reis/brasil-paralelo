import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { SearchButton } from '../SearchButton';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.hero}>
        <img src="./images/logo.svg" alt="Logo Brasil Paralelo" />
        <div className={styles.search}>
          <p>Entretenimento e Educação</p>
          <SearchButton />
        </div>
        <SignInButton />
      </div>
    </header>
  );
}