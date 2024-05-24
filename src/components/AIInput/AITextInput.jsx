import React from 'react'
import propTypes from 'prop-types'
import './input.css'

export const AITextInput = ({
    type,
    value,
    isDisable,
    width,
    isError,
    showCharCount,
    charCountPosition,
    maxLength,
    ...props
}) => {

    return (
        <div className='input-wrapper'>
            {showCharCount && charCountPosition === 'top' && (
                <div className="character-count-wrapper margin-bottom">
                    <small>{value?.length}/200</small>
                </div>
            )}
            <input
                className={['ai-input-box', isError && 'error-box']?.join(' ')}
                style={{ width: `${width}px` }}
                type={type}
                value={value}
                maxLength={maxLength}
                {...props}
                disabled={isDisable ? true : false}
            />
            {showCharCount && charCountPosition === 'bottom' && (
                <div className="character-count-wrapper margin-top">
                    <small>{value?.length}/{maxLength}</small>
                </div>
            )}
        </div>
    )
}

AITextInput.propTypes = {
    /**
     * Type of input box
     */
    type: propTypes.oneOf(['text', 'email', 'password', 'number']),
    /**
     * Is the input box is disabled
     */
    isDisable: propTypes.bool,
    /**
     * Width of the input box
     */
    width: propTypes.number,
    /**
     * Apply error style to input box
     */
    isError: propTypes.bool,
    /**
     * Display the character count 
     */
    showCharCount: propTypes.bool,
    /**
     * Set the character counter position
     */
    charCountPosition: propTypes.oneOf(['top', 'bottom']),
    /**
     * Maximum number of characters allowed
     */
    maxLength: propTypes.number
}

AITextInput.defaultProps = {
    type: 'text',
    isDisable: false,
    width: 200,
    isError: false,
    showCharCount: false,
    charCountPosition: 'bottom',
    maxLength: 200
}