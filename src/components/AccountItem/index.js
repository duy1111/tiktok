import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./AccountItem.module.scss"
function AccountItem() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.avatar)} src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1688117480589313~c5_300x300.webp?x-expires=1661853600&x-signature=53PMKRNOlyVdLV2a3abaoaQV0y4%3D" alt=""/>
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle}/>
                </h4>
                <span className={clsx(styles.username)}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;