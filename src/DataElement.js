import React from 'react';
import ScoreSheet from './ScoreSheet';

const DataElement = ({datakey, datavalue,comparisonIndex,comparison}) => {
  if (datakey.length === 0 && comparison == datavalue) {
    // console.log(0+" "+datakey+" "+datavalue);
    return (<div>
      <div className="dataElement float tags">
        <span className="dataValue">{datavalue}</span>
        <ScoreSheet comparison={comparison} tagValue={datavalue} comparisonIndex={comparisonIndex}/>
      </div>
    </div>);
  }
  else if (datakey.length === 0 && comparison == datavalue){
    return (<div>
      <div className="dataElement float tags DodgerBlue">
        <span className="dataValue">{datavalue}</span>
        <ScoreSheet comparison={comparison} tagValue={datavalue} comparisonIndex={comparisonIndex}/>
      </div>
    </div>);
  }
  else if (datavalue.length === 0) {
    // console.log(1+" "+datakey+" "+datavalue);
    return (
      <div className="dataElement margin1rem">
        <span className="dataKey">{datakey}</span>
      </div>);
  }
  else{
    // console.log(2+" "+datakey+" "+datavalue);
    return (
      <div className="dataElement margin1rem">
        <span className="dataKey">{datakey}</span>
        <span className="dataValue">{datavalue}</span>
        <ScoreSheet comparison={comparison} comparisonIndex={comparisonIndex}/>
      </div>);
  }
}

export default DataElement;
