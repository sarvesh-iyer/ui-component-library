import React, { useState } from 'react'
import './select.css'
import propTypes from 'prop-types'
import Select, {components} from 'react-select'

export const AISelect = ({
    variant,
    options,
    placeholder,
    width,
    isSearchable,
    isDisable,
    hideDropDownIndicator,
    ...props
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const style = {
        placeholder: (provided, state) => ({
            ...provided,
            color: (isMenuOpen && variant === 'light-blue') ? "#0074D3" : isDisable ? "#C2C2C2" : "#3C4043",
            fontFamily: "Roboto",
            fontSize: "13px",
            fontWeight: '400',
            lineHeight: "24px",
        }),
        menu: (provided, state) => ({
            ...provided,
            padding: "6px 0px 0px 0px",
            boxShadow: "0px 3px 6px #00000029",
            border: "1px solid #DADADA",
            borderRadius: "4px",
            ...(width !== null && width > 100 && {width: width}),
            zIndex: 1080
        }), 
        option: (provided, state) => ({
            ...provided,
            borderBottom: "0px solid #CED4DA",
            borderLeft: "2px solid transparent",
            color: state.isSelected ? "#ffffff" : state.isDisabled ? "#cccccc" : "#7E7E7E",
            background: state.isSelected ? "#F4F5F7" : "#ffffff",
            display: "flex",
            marginBottom: "0.2rem",
            padding: "4px 6px",
            color: "#292929",
            fontFamily: "Roboto",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "24px",
            "&:hover": {
                background: "#F4F5F7",
                borderLeft: "2px solid #0074D3",
                cursor: "pointer",
            },
        }),
        control: (base, state) => ({
            ...base,
            border: (variant === 'white' && state.isFocused) ? "1px solid #0074D3" : (isDisable || variant !== 'white') ? 'none' : "1px solid #D3D8DC",
            outline: (variant === 'white' && state.isFocused) ? "1px solid #0074D3" : "none",
            backgroundColor: "#FFFFFF",
            borderRadius: 4,
            transtion: 0.3,
            backgroundColor: isDisable ? "#F5F5F5" : variant === 'light-blue' ? '#E8F0FE' : variant === 'light-gray' ? "#E9EBEE" : "#FFFFFF" ,
            color: isDisable ? "#C2C2C2" : "#222222",
            fontFamily: "Roboto",
            fontSize: "13px",
            fontWeight: "500",
            lineHeight: "24px",
            boxShadow: 0,
            padding: "0px",
            ...(width !== null && width > 100 && {width: width}),
            height: state.isFocused ? 42 : 42,
            "&:hover": {
                cursor: "pointer",
            },
        }),
        menuList: (base) => ({
            ...base,
            // height: "100px",

            "::-webkit-scrollbar": {
                width: "8px"
            },
            "::-webkit-scrollbar-track": {
                background: "transparent"
            },
            "::-webkit-scrollbar-thumb": {
                background: "#DADDE0",
                border: "8px solid #DADDE0 !important",
                borderRadius: "50px",
            },

        }),
        singleValue: (provided) => ({
            ...provided,
            ...(variant === 'light-blue' && {color:'#0074D3'}),
        })
    };

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <span  
                    id="triangle-down"
                    className={
                        (variant === 'light-blue') ? "blue-drop-down-indicator" : 
                        isDisable ? 'disabled-drop-down-indicator' : ''
                    }
                ></span>
            </components.DropdownIndicator>
        );
    };
    
    return (
        <Select
            menuPlacement="auto"
            styles={style}
            isSearchable={isSearchable}
            placeholder={placeholder ? placeholder : 'Select'}
            onMenuOpen={() => setIsMenuOpen(true)}
            onMenuClose={() => setIsMenuOpen(false)}
            options={options}
            components={{ ...(hideDropDownIndicator ? {DropdownIndicator: () => null} : {DropdownIndicator}), IndicatorSeparator: () => null }}
            isDisabled={isDisable}
            {...props}
        />
    )
}

AISelect.propTypes = {
    /**
     * Background color of select
     */
    variant: propTypes.oneOf(['white', 'light-blue', 'light-gray']),
    /**
     * List of options in select
     */
    options: propTypes.arrayOf(propTypes.shape({
        label: propTypes.string,
        value: propTypes.number
    })),
    /**
     * Placeholder text
     */
    placeholder: propTypes.string,
    /**
     * Set the width - width should be greater 100
     */
    width: propTypes.number,
    /**
     * Is the select is searchable
     */
    isSearchable: propTypes.bool,
    /**
     * Is the select is disabled
     */
    isDisable: propTypes.bool,
    /**
     * Hide/show the select drop-down indicator
     */
    hideDropDownIndicator: propTypes.bool
}

AISelect.defaultProps = {
    variant: 'white',
    placeholder: "Select",
    options: [
        {
            label: 'Option one',
            value: 1,
        },
        {
            label: 'Option two',
            value: 2,
        },
        {
            label: 'Option three',
            value: 3,
        },
        {
            label: 'Option four',
            value: 4,
        },
    ],
    isSearchable: false,
    isDisable: false,
    width: null,
    hideDropDownIndicator: false
}