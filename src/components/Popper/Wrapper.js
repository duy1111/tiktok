import PropTypes from 'prop-types'
import styles from "./Popper.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Wrapper( {children,className}) {
    return <div className={cx('wrapper',className)}>
        {children}
    </div>
}
Wrapper.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
export default Wrapper;