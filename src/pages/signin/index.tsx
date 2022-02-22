import { SignInButton } from '../../components/SignInButton';
import { SocialMediaButton } from '../../components/SocialMediaButton';
import styles from './styles.module.scss';

export default function SignIn() {
  return (
    <div className={styles.containerSign}>

      <div className={styles.backgroundDesktop}></div>

      <div className={styles.containerLogin}>
        <img src="images/logo.svg" alt="Logo Brasil Pararelo" />

        <div className={styles.loginSocialMedia}>
          <p>Acessar com redes sociais</p>
          <SocialMediaButton nameSocialMedia={'Google'} />
          <SocialMediaButton nameSocialMedia={'Facebook'} />
          <SocialMediaButton nameSocialMedia={'Twitter'} />
        </div>

        <p>ou</p>

        <div className={styles.loginEmail}>
          <p>Acessar com e-mail e senha</p>
          <input type="text" placeholder='Informe seu e-mail' />
          <input type="password" placeholder='Digite sua senha' />
          <button>Acessar conta</button>
          <button>Esqueci minha senha</button>
        </div>

      </div>

    </div>
  );
}