import PropTypes from 'prop-types'
function Account({children}) {
    return ( 
        <nav>{children}</nav>
     );
}


Account.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Account;