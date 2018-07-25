import React from 'react';
import UrlInput from './UrlInput';
import DataElement from './DataElement';

class Scoresheet extends React.Component {
  render() {
    const {datakey, comparison, comparisonIndex} = this.props;
    // console.log("score: " + datakey + " " + comparison + " " + index);
    if (comparison != undefined) {

      if (comparison == comparisonIndex) {
        return (<span className="dataElement scores">&#x2191;</span>)
      } else {
        return (<span className="dataElement scores">&#x2193;</span>)
      }
    } else {
      return (<span className="dataElement scores"></span>)
    }
  }
}

export default Scoresheet;
