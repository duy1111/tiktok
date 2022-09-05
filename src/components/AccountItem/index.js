import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './AccountItem.module.scss';
function AccountItem() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img
                className={clsx(styles.avatar)}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9225c96f1cbd5d34f53a6f19008be644~c5_300x300.webp?x-expires=1662541200&x-signature=uHLKmO9EX8pkIdbIyFPx6yp%2F4FM%3D"
                alt=""
            />
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                </h4>
                <span className={clsx(styles.username)}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
