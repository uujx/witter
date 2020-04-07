import React from "react"
import "./App.css"
import TweetList from "./containers/TweetList/TweetList"
import Layout from "./hoc/Layout/Layout"
import NewTweet from "./components/NewTweet/NewTweet"



function App() {
    return (
      <Layout>
        <NewTweet />
        <TweetList />
      </Layout>
    )
}

export default App
