import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./DefaultLayout.module.scss"
import clsx from "clsx";
import PropTypes from 'prop-types'
function DefaultLayout({ children}) {
    return ( 
        <div className={clsx(styles.wrapper)}> 
            <Header/>
            <div className={clsx(styles.container)} >
                <Sidebar/>
                <div className={clsx(styles.content)}>
                    {children}
                </div>
            </div>
        </div>
     );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;