import React from 'react';

const DataElement = ({datakey, datavalue}) => {
  if (datakey.length === 0) {
    console.log(0+" "+datakey+" "+datavalue);
    return (<div>
      <div className="dataElement float tags">
        <span className="dataValue">{datavalue}</span>
      </div>
    </div>);
  }
  else if (datavalue.length === 0) {
    console.log(1+" "+datakey+" "+datavalue);
    return (
      <div className="dataElement margin1rem">
        <span className="dataKey">{datakey}</span>
      </div>);
  }
  else{
    console.log(2+" "+datakey+" "+datavalue);
    return (
      <div className="dataElement margin1rem">
        <span className="dataKey">{datakey}</span>
        <span className="dataValue">{datavalue}</span>
      </div>);
  }
}

export default DataElement;
