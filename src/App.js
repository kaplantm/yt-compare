import React, {Component} from 'react';
import ComparisonCard from './ComparisonCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetails: [],
      comparison: {
        Views: 0,
        Likes: 0,
        Dislikes: 0,
        Comments: 0
      }
    };
  }

  compareVideos = () => {
    const vids = this.state.videoDetails;
    let tempObj = {
      Views: 0,
      Likes: 0,
      Dislikes: 0,
      Comments: 0
    }
      // const comparisonArray = Object.keys(this.state.videoDetails[0]).map((property,i) => {
      //
      // }
      if(vids[0].Views < vids[1].Views){
        tempObj.Views = 1;
      }
      if(vids[0].Likes < vids[1].Likes){
        tempObj.Likes = 1;
      }
      if(vids[0].Dislikes < vids[1].Dislikes){
        tempObj.Dislikes = 1;
      }
      if(vids[0].Comments < vids[1].Comments){
        tempObj.Comments = 1;
      }

      this.setState({comparison: tempObj});

  }

  addVideo = (url,callback) => {
    fetch(this.state.inputUrl)
        fetch(url)
        .then(results => {
          return results.json();
        })
        .then(data => {
            let newVideo = {
              Title: data["items"][0]["snippet"]["title"],
              Author: data["items"][0]["snippet"]["channelTitle"],
              Runtime: data["items"][0]["contentDetails"]["duration"],
              Captioning: data["items"][0]["contentDetails"]["caption"],
              Views: data["items"][0]["statistics"]["viewCount"],
              Likes: data["items"][0]["statistics"]["likeCount"],
              Dislikes: data["items"][0]["statistics"]["dislikeCount"],
              Comments: data["items"][0]["statistics"]["commentCount"],
              Tags: data["items"][0]["snippet"]["tags"],
              Thumbnail: data["items"][0]["snippet"]["thumbnails"]["medium"]['url'],
            }

            let currentVideos = this.state.videoDetails;
            currentVideos.push(newVideo);
            this.setState({videoDetails: currentVideos});
console.log("here");

            if(this.state.videoDetails.length >= 2){
              this.compareVideos();
            }
            callback()
          })
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Compare Youtube</h1>
      </header>

      <p className="padding1rem whiteBg">Compare tags and video statistics between Youtube videos.</p>

      <div className="compareCellContainer">
        <ComparisonCard addVideoFunc={this.addVideo} videoDeets={this.state.videoDetails} comparison={this.state.comparison} index='0' />
        <ComparisonCard addVideoFunc={this.addVideo} videoDeets={this.state.videoDetails} comparison={this.state.comparison} index='1' />
      </div>

    </div>);
  }
}

export default App;
