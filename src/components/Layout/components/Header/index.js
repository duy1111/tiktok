import styles from './Header.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <div className={clsx(styles.logo)}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className={clsx(styles.search)}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={clsx(styles.clear)}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
          <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner}></FontAwesomeIcon>
          <button className={clsx(styles['search-btn'])}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>
        <div className={clsx(styles.actions)}></div>
      </div>
    </header>
  );
}

export default Header;
