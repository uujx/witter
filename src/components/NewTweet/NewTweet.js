import React, { useState } from "react"

import './NewTweet.css'

const NewTweet = () => {
    const [tweetContent, setTweetContent] = useState("")

    const onInputChangeHandler = (event) => {
        setTweetContent(event.target.value)
    }

    const sendButtonClickHandler = () => {
        // TODO: send the new post
    }

    return (
        <div className="newTweet">
            <div className="avatar"></div>
            <div>
                <textarea
                    rows="2"
                    cols="65"
                    placeholder="Anything new?"
                    value={tweetContent}
                    onChange={onInputChangeHandler}
                />
                <button onClick={sendButtonClickHandler}>
                    Post
                </button>
            </div>
        </div>
    )
}

export default NewTweet
