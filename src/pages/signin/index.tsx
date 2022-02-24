import { SocialMediaButton } from '../../components/SocialMediaButton';
import styles from './styles.module.scss';

export default function SignIn() {
  return (
    <div className={styles.containerSign}>

      <div className={styles.backgroundDesktop} />

      <div className={styles.containerLogin}>

        <img src="images/logo.svg" alt="Logo Brasil Pararelo" />

        <div className={styles.loginSocialMedia}>
          <p>Acessar com redes sociais</p>
          <SocialMediaButton nameSocialMedia={'Google'} />
          <SocialMediaButton nameSocialMedia={'Facebook'} />
          <SocialMediaButton nameSocialMedia={'Twitter'} />
          <SocialMediaButton nameSocialMedia={'GitHub'} />
        </div>

        <p>ou</p>

        <form className={styles.loginEmail}>
          <p>Acessar com e-mail e senha</p>
          <input type="email" placeholder='Informe seu e-mail' />
          <input type="password" placeholder='Digite sua senha' />
          <button type="submit" id={styles.accessCount}>Acessar conta</button>
          <button id='forgetPassword'>Esqueci minha senha</button>
        </form>

      </div>

    </div>
  );
}