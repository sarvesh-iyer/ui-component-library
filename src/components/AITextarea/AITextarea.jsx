import React from 'react'
import propTypes from 'prop-types'
import './textarea.css'

export const AITextarea = ({
    value,
    isDisable,
    width,
    height,
    isError,
    showCharCount,
    charCountPosition,
    maxLength,
    resize,
    ...props
}) => {

    return (
        <div className='textarea-wrapper'>
            {showCharCount && charCountPosition === 'top' && (
                <div className="character-count-wrapper margin-bottom">
                    <small>{value?.length}/200</small>
                </div>
            )}
            <textarea
                className={['ai-textarea-box', 'scrollbar-ui', isError && 'error-box']?.join(' ')}
                style={{ width: `${width}px`, height: `${height}px`, resize: resize ? 'both' : 'none' }}
                value={value}
                maxLength={maxLength}
                {...props}
                disabled={isDisable ? true : false}
            ></textarea>
            {showCharCount && charCountPosition === 'bottom' && (
                <div className="character-count-wrapper margin-top">
                    <small>{value?.length}/{maxLength}</small>
                </div>
            )}
        </div>
    )
}

AITextarea.propTypes = {
    /**
     * Is the input box is disabled
     */
    isDisable: propTypes.bool,
    /**
     * Width of textarea box
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
    maxLength: propTypes.number,
    /**
     * Enable / disable textarea resize
     */
    resize: propTypes.bool
}

AITextarea.defaultProps = {
    isDisable: false,
    width: 300,
    height: 150,
    isError: false,
    showCharCount: false,
    charCountPosition: 'bottom',
    maxLength: 200,
    resize: false
}