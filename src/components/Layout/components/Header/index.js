import styles from './Header.module.scss';
import Button from '~/components/Button';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrappers } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
                            <PopperWrappers>
                                <h4 className={clsx(styles['search-title'])}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrappers>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={clsx(styles.actions)}>
                    <Button text  outline >Upload</Button>
                    <Button primary disabled onClick={()=> alert('clicked!')}>Log in</Button>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
