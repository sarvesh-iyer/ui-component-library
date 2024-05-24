import React, { useEffect, useRef, useState } from 'react'
import propTypes from 'prop-types'
import './highlighter.css'

export const Highlighter = ({
    wordList,
    ...props
}) => {

    const [textareaValue, setTextareaValue] = useState('')
    const copyDivRef = useRef(null)
    const originalDivRef = useRef(null)

    useEffect(() => {
        highlightWords()
    }, [textareaValue])
    

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value)
        copyDivRef.current.innerText = e.target.value
    } 

    const handleScroll = (source, target) => {
        const sourceDiv = document.querySelector(source);
        const targetDiv = document.querySelector(target);
    
        if (sourceDiv && targetDiv) {
          targetDiv.scrollTop = sourceDiv.scrollTop;
        }
    };

    /* Remove the specified :tags in the :text */
    const removeSpecificTag = (text, tags = []) => {
        if (typeof tags == "string") tags = [tags];
        let regExp = "";
        tags.map((tag) => {
            regExp = new RegExp("<" + tag + "[^>]*>", "g");
            if (text != null) text = text.replace(regExp, "");
            regExp = new RegExp("</" + tag + ">", "g");
            if (text != null) text = text.replace(regExp, "");
        });
        return text;
    };

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const highlightWords = () => {
        if (textareaValue?.length === 0) return
        // let content_editable_div = targetContentEditable.current[segment_id].current
        if(wordList?.split(',')?.filter(each => each?.trim() !== '')?.length !== 0){
            console.log(wordList?.split(','))
            let words_list = wordList?.split(',')?.filter(each => each?.trim() !== '')?.map(each => {
                return each?.trim()
            })

            var text = textareaValue
            // text = removeTagsWithClass(text, 'mark', 'choicelist-option-highlight')
            var wordsToHighlight = words_list; // Array of words to highlight
            // console.log(wordsToHighlight)
            // console.log(text)

            try{
                // Generate regular expression pattern with all the words to highlight
                // var pattern = new RegExp(`(?:^|(?<!\\p{L}))(${wordsToHighlight.map(escapeRegExp).join('|')})(?:(?!\\p{L})|$)`, 'gu');
                var pattern = new RegExp('\\b(' + wordsToHighlight.map(escapeRegExp).join('|') + ')\\b', 'gi');
                // console.log(pattern)
                var highlightedHtml = text.replace(
                    pattern, (match) => {
                        return `<mark data-word=${`"${match}"`}  class="spellcheck-highlight" >${match}</mark>`
                    }
                );

                // console.log(highlightedHtml)
                copyDivRef.current.innerHTML = removeSpecificTag(highlightedHtml, 'font');
            }catch(e){
                console.log(e)
            }
            // restoreCursorPositionWithinContenteditable(content_editable_div);
        }
    }


    return (
        <div className="writing-box-wrapper">
            <div className="writing-inner-overflow-box">
                <div 
                    ref={copyDivRef}
                    spellCheck="false" 
                    className="spell-check-box-copy"
                    contentEditable={true}
                    onScroll={() => handleScroll(".spell-check-box-copy", ".spell-check-box")}
                ></div>
                <textarea 
                    ref={originalDivRef}
                    name="spell-check-box" 
                    placeholder="Type here..."
                    spellCheck="false"
                    className="spell-check-box"
                    maxLength={5000}
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    onScroll={() => handleScroll(".spell-check-box", ".spell-check-box-copy")}
                ></textarea>
            </div>
            <span className="char-wrapper">{textareaValue?.length}/5000</span>
        </div>
    )
}

Highlighter.propTypes = {
    /**
     * List of words to highlight
     */
    wordList: propTypes.string,

}

Highlighter.defaultProps = {
    wordList: 'sarvesh,good,super,how are you,awesome,sad'
}