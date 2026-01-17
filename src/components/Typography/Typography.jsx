import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.scss';


/*
  Typography Component
  Props:
  - variant: 'hero' | 'title' | 'subtitle' | 'heading' | 'subheading' | 'body' | 'caption'
  - component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  - weight: 'regular' | 'medium' | 'bold'
  - children: node
  - className: string
*/

const Typography = ({
    variant = 'body',
    component,
    weight,
    children,
    className,
    ...props
}) => {
    // Determine default component tag based on variant if not specified
    const Component = component ||
        (variant === 'hero' ? 'h1' :
            variant === 'title' ? 'h2' :
                variant === 'subtitle' ? 'p' :
                    variant === 'heading' ? 'h3' :
                        variant === 'subheading' ? 'h4' :
                            'p');

    const classes = [
        styles.typography,
        styles[`variant-${variant}`],
        weight && styles[`weight-${weight}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

Typography.propTypes = {
    variant: PropTypes.oneOf(['hero', 'title', 'subtitle', 'heading', 'subheading', 'body', 'caption']),
    component: PropTypes.elementType,
    weight: PropTypes.oneOf(['regular', 'medium', 'bold']),
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Typography;
