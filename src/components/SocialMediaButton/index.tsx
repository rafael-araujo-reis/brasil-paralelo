import styles from './styles.module.scss';

import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

interface SocialMediaButtonProps {
  nameSocialMedia: string,
  iconSocialMedia?: string;
}

export function SocialMediaButton({ nameSocialMedia, iconSocialMedia }: SocialMediaButtonProps) {
  return (
    <button className={
      nameSocialMedia === 'Google' ? styles.FaGoogle :
        nameSocialMedia === 'Facebook' ? styles.FaFacebook :
          styles.FaTwitter
    }>
      {
        nameSocialMedia === 'Google' ? <FaGoogle color="#E92F47" /> :
          nameSocialMedia === 'Facebook' ? <FaFacebook color="#FFFFFF" /> :
            <FaTwitter color="#FFFFFF" />
      }
      Acessar com {nameSocialMedia}
    </button>
  );
}