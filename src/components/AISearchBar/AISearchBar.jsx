import React, { useEffect, useRef, useState } from 'react'
import propTypes from 'prop-types'
import './searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const AISearchBar = ({
    value,
    onChange,
    onSearch,
    primary,
    width,
    placeholder,
    backgroundColor,
    dropDownPlaceholderText,
    ...props
}) => {

    const [openSearchDropDown, setOpenSearchDropDown] = useState(false)
    const inputRef = useRef(null)
    const searchContainerRef = useRef(null)

    useEffect(() => {
        const handleSearchTermClickOutside = (e) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
                handleSearchDropDownClose()
            }
        };

        document.addEventListener("mousedown", handleSearchTermClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleSearchTermClickOutside);
        };
    }, [])
    

    const handleSearchDropDownOpen = () => {
        setOpenSearchDropDown(true)
    } 
    
    const handleSearchDropDownClose = () => {
        setOpenSearchDropDown(false)
    } 
    
    const handleOnchange = (e) => {
        onChange(e)
    } 

    const handleSearchDrpDownClick = (e) => {
        if(value?.trim() === "") return
        handleSearchDropDownClose()
        onSearch(e)
    }

    const handleCloseBtnClick = (e) => {
        inputRef.current.value = ''
        handleSearchDropDownClose() 
    }

    const handleKeyDown = (e) => {
        if (e.which === 13 && value == "") {
            handleSearchDropDownClose()
        } else if (e.which === 13) {
            onSearch(e)
            handleSearchDropDownClose()
        }
    }

   
    return (
        <div 
            ref={searchContainerRef} 
            className="ai-search-bar-container"
        >
            <div 
                className={
                    [
                        'project-list-search-box',
                        openSearchDropDown ? 'active' : '',
                        !primary ? 'secondary' : ''
                    ].join(' ')
                }
                style={{
                    width: width, 
                    backgroundColor: backgroundColor, 
                    border: backgroundColor && 'none',
                }}
            >
                <div className="img-box">
                    <SearchIcon 
                        className="search-icon" 
                        style={{fontSize: '20px', color: '#7f7f7f'}} 
                        name="search-dropdown" 
                    />
                </div>
                <input
                    ref={inputRef}
                    value={value}
                    type="search"
                    placeholder={placeholder}
                    onChange={handleOnchange}
                    onKeyDown={handleKeyDown}
                    onClick={handleSearchDropDownOpen}
                    onFocus={handleSearchDropDownOpen}
                />
                <span 
                    className={"close " + ((openSearchDropDown) ? "show " : " ")}
                    onClick={handleCloseBtnClick}
                >
                    <CloseOutlinedIcon style={{fontSize: '20px', color: '#7f7f7f'}} />
                </span>
            </div>
            <div className={"search-results-bar project-list-search-bar " + (openSearchDropDown ? "show" : "hide")}>
                <div name="search-dropdown"  className={"search-results-item " + ("cursor-change")}>
                    <SearchIcon className="search-icon" name="search-dropdown" style={{fontSize: '20px'}} />
                    <div className="searched-results-info" name="search-dropdown" onClick={handleSearchDrpDownClick}>
                        <p className="searched-term" name="search-dropdown">{value}</p>
                        {
                            value?.trim() !== "" ?
                                <p className="results-link">Press enter to see <span>search results</span></p>
                                :
                                <p className="results-link" name="search-dropdown">Type the <span>{dropDownPlaceholderText}</span></p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

AISearchBar.propTypes = {
    
    /**
     * 	The value of the search component, required for a controlled component
     */
    value: propTypes.string.isRequired,
    /**
     * Placeholder text
     */
    placeholder: propTypes.string,
    /**
     * Customize the text in the drop-down
     */
    dropDownPlaceholderText: propTypes.string,
    /**
     * Set the style of search bar
     */
    primary: propTypes.bool,
    /**
     * Set the width of the search-bar
     */
    width: propTypes.number,
    /**
     * Set a custom background color for search-bar
    */
    backgroundColor: propTypes.string,
    /**
     * Callback fired when the value is changed
    */
    onChange: propTypes.func.isRequired,
    /**
     * Callback fires on 'Enter' key press and search drop-down 'clicked'
     * Write your own search functionality and pass it as prop
     */
    onSearch: propTypes.func.isRequired,
}

AISearchBar.defaultProps= {
    width: 375,
    placeholder: 'Search',
    primary: true,
    dropDownPlaceholderText: 'project name, language etc',
    value: ''
}