import React from 'react';
import UrlInput from './UrlInput';
import DataElement from './DataElement';
import ScoreSheet from './ScoreSheet';

class ComparisonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: null,
      urlSubmit: false,
      // videoDetails: null,
    };
  }

  onInputChange = (event) => {
    let stateUpdate = event.target.id;
    this.setState({[stateUpdate]: event.target.value});
    // console.log(event.target.value);
    // console.log(this.state.inputUrl);
  }
  submitURL = (event) => {
    console.log("yee1");

    let apiURL = this.state.inputUrl;
    const patt1 = /\?v=.*/g;
    let videoID = apiURL.match(patt1)[0].split("=")[1];
    apiURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=AIzaSyCYC8Kd7YsRxYGm0ZnqhIn73DqR4dbhzqk&part=snippet,contentDetails,statistics`;

    this.props.addVideoFunc(apiURL, ()=>{
      this.setState({
        inputUrl: this.state.inputUrl,
        urlSubmit: true,
      })
    });
  }
  clearComparison = (event) => {
    this.setState({urlSubmit: false});
    // console.log(this.state.urlSubmit);
  }



  render() {
    const {urlSubmit, inputUrl} = this.state;

    if (!urlSubmit) {
      return (<div className="compareCell padding1rem round-corners">
        <div className="emptyCell textCenter">
          <UrlInput onInputChange={this.onInputChange} onInputSubmit={this.submitURL} statevar="inputUrl"/>
        </div>
      </div>);
    } else {

      const VideoData = this.props.videoDeets[this.props.index];
      const videoPropertiesArray = Object.keys(VideoData).map((property,i) => {
        if(property != "Tags" && property !="Thumbnail" && property !="Title"){
          return(<div>
            <DataElement key={property} datakey={property} datavalue={VideoData[property]}/>
            <ScoreSheet key={`${property}Score`} datakey={property} comparison={this.props.comparison[property]} index={this.props.index} />
          </div>)
        }
        else if (property === "Tags"){
          return <DataElement key={property} datakey={property} datavalue={''}/>
        }
      })
      const tagsArray =VideoData.Tags.map((tag, i)=>{
            return <DataElement key={tag} datakey='' datavalue={tag}/>
          })


      return (<div className="compareCell padding1rem round-corners">
        <div className="remove round-corners clickCursor" onClick={this.clearComparison}>X</div>
        <div className="textCenter">
        <h3>{VideoData.Title}</h3>
        <img className="thumbnail-img" src={VideoData.Thumbnail}/>
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
