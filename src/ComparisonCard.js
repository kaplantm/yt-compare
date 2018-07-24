import React from 'react';
import UrlInput from './UrlInput';
import DataElement from './DataElement';

class ComparisonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: null,
      urlSubmit: false,
      videoDetails: null,
    };
  }

  onInputChange = (event) => {
    let stateUpdate = event.target.id;
    this.setState({[stateUpdate]: event.target.value});
    // console.log(event.target.value);
    console.log(this.state.inputUrl);
  }
  submitURL = (event) => {
    console.log(this.state.urlSubmit);

    let apiURL = this.state.inputUrl;
    const patt1 = /\?v=.*/g;
    let videoID = apiURL.match(patt1)[0].split("=")[1];
    apiURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=AIzaSyCYC8Kd7YsRxYGm0ZnqhIn73DqR4dbhzqk&part=snippet,contentDetails,statistics`

fetch(this.state.inputUrl)
    fetch(apiURL)
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({
        inputUrl: this.state.inputUrl,
        urlSubmit: true,
        videoDetails: {
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
      })
    })
    console.log(this.state);
  }
  clearComparison = (event) => {
    this.setState({urlSubmit: false});
    console.log(this.state.urlSubmit);
  }



  render() {
    const {urlSubmit, inputUrl,videoDetails} = this.state;

    if (!urlSubmit) {
      return (<div className="compareCell padding1rem round-corners">
        <div className="emptyCell textCenter">
          <UrlInput onInputChange={this.onInputChange} onInputSubmit={this.submitURL} statevar="inputUrl"/>
        </div>
      </div>);
    } else {

      const videoPropertiesArray = Object.keys(this.state.videoDetails).map((property,i) => {
        if(property != "Tags" && property !="Thumbnail"){
          return <DataElement key={property} datakey={property} datavalue={videoDetails[property]}/>
        }
        else if (property === "Tags"){
          return <DataElement key={property} datakey={property} datavalue={''}/>
        }
      })

      const tagsArray =videoDetails.Tags.map((tag, i)=>{
            return <DataElement key={tag} datakey='' datavalue={tag}/>
          })

      return (<div className="compareCell padding1rem round-corners">
        <div className="remove round-corners clickCursor" onClick={this.clearComparison}>X</div>
        <div className="textCenter">
        <img className="thumbnail-img" src={videoDetails.Thumbnail}/>
        </div>


        {videoPropertiesArray}
        <div className="margin1rem">
        {tagsArray}
        </div>
      </div>);
  }
  }
}

export default ComparisonCard;
