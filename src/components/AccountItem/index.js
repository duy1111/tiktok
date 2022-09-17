import propTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';

function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
            <Image
                className={clsx(styles.avatar)}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />}
                </h4>
                <span className={clsx(styles.username)}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.prototype = {
    data: propTypes.object.isRequired,
}
export default AccountItem;
