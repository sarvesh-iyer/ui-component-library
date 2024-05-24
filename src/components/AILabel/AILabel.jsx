import React from 'react'
import propTypes from 'prop-types'
import './label.css'

export const AILabel = ({
    children,
    variant,
    size,
    fontWeight,
    ...props
}) => {
    return (
        <span 
            className={[
                'ai-label',
                `label-weight-${fontWeight}`,
                `label-size-${size}`,
                variant
            ]?.join(' ')}
        >
            {children}
        </span>
    )
}

AILabel.propTypes = {
    /**
     * Specifies the label style
     */
    variant: propTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
    /**
     * Size of the label
     */
    size: propTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Thickness of the label
     */
    fontWeight: propTypes.oneOf(['light', 'normal', 'bold'])
}

AILabel.defaultProps = {
    variant: 'primary',
    size: 'medium',
    fontWeight: 'normal'
}