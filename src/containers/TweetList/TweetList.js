import React, { Component } from "react"

import Tweet from "../../components/Tweet/Tweet"

export class TweetList extends Component {
    state = {
        tweets: [],
    }

    componentDidMount() {
        const generatedTweet = []
        for (let i = 0; i < 10; i++) {
            const tweet = {
                name: `User ${i}`,
                content: `This is the tweet content of User ${i}`,
                id: i,
                date: `April ${i}`,
            }
            generatedTweet.push(tweet)
        }

        this.setState({ tweets: generatedTweet })
    }

    render() {
        const tweets = this.state.tweets.map((tweet, index) => (
            <Tweet
                key={index}
                name={tweet.name}
                content={tweet.content}
                id={tweet.id}
                date={tweet.date}
            />
        ))

        return <div>{tweets}</div>
    }
}

export default TweetList
