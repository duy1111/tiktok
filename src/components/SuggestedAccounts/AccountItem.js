import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}></AccountPreview>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview} offset={[-20, 0]}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} loading="lazy" src={data.avatar} alt={data.nickname}></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
