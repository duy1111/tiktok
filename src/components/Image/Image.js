// import { forwardRef } from 'react'
// function Image({...props}) {
//     return ( 
//         // eslint-disable-next-line jsx-a11y/alt-text
//         <img {...props}></img>
//      );
// }

// export default forwardRef(Image);
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';
import PropTypes from 'prop-types'
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    class: PropTypes.string,
    fallback: PropTypes.string,
}
export default Image;