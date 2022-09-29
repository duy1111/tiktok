import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
const cx = classNames.bind(styles);
function AccountPreview({data}) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    loading="lazy"
                    src={data.avatar}
                    alt={data.nickname}
                ></Image>
                <Button className={cx("follow-btn")} primary>Follow</Button>
            </header>
            <div className={cx("body")}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    <p className={cx("analytics")}>
                        <strong className={cx('value')}>{data.followers_count}</strong>
                        <span className={cx("label")}>Followers</span>
                        <strong className={cx('value')}>{data.likes_count} </strong>
                        <span className={cx("label")}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
AccountPreview.propTypes ={
    data: PropTypes.object.isRequired,
}
export default AccountPreview;
