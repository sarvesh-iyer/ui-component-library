import React from 'react'
import propTypes from 'prop-types'
import './button.css'

export const AIButton = ({
    children,
    variant,
    primary,
    isDisable,
    size,
    startIcon,
    endIcon,
    fontWeight,
    specialVariant,
    backgroundColor,
    textColor,
    ...props
}) => {

    const isIconPresent = (startIcon !== null || endIcon !== null) ? true : false
    const mode = primary ? 'ai-btn-primary' : 'ai-btn-secondary'

    return (
        <button
            className={
                [
                    'ai-btn', 
                    mode,
                    (specialVariant !== 'none' && specialVariant !== null) && `ai-${specialVariant}-btn`,
                    `ai-btn-${variant}`,
                    `ai-btn-size-${size}`,
                    `ai-btn-weight-${fontWeight}`,
                    isDisable && 'ai-btn-disabled',
                    isIconPresent && 'btn-with-icon-wrap',

                ]?.join(' ')
            }
            style={{
                backgroundColor: backgroundColor,
                color: textColor
            }}
            {...props}
        >
            {/* <span class="loader"></span> */}
            {startIcon !== null && (
                <span className='btn-start-icon'>{startIcon}</span>
            )} 
            {children}
            {endIcon !== null && (
                <span className='btn-end-icon'>{endIcon}</span>
            )}
        </button>
    )
}



AIButton.propTypes = {
    /** 
     * Is the button is primary
    */
    primary: propTypes.bool,
    /**
     * Is the button is disabled
    */
    isDisable: propTypes.bool,
    /**
     * Which style the button will be
    */
    variant: propTypes.oneOf(['text', 'contained', 'outlined']),
    /**
     * Button size
    */
    size: propTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Special variant button, overrides other variants 
     */
    specialVariant: propTypes.oneOf(['none', 'light-blue', 'light-gray']),
    /**
     * Button label thickness
    */
    fontWeight: propTypes.oneOf(['light', 'normal', 'bold']),
    /**
     * Set the text color of the button
     */
    textColor: propTypes.string,
    /**
     * Set the background color 
     */
    backgroundColor: propTypes.string,
    /**
     * Icon / image in the beginning of the button
    */
    startIcon: propTypes.element,
    /**
     * Icon / image in the end of the button
    */
    endIcon: propTypes.element,
    /**
     * onClick handler
    */
    onClick: propTypes.func,
  };
  
  AIButton.defaultProps = {
    primary: true,
    isDisable: false,
    variant: 'contained',
    size: 'medium',
    fontWeight: 'normal',
    specialVariant: null,
    startIcon: null,
    endIcon: null,
    onClick: undefined,
  };