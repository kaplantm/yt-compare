import React from 'react';

const UrlInput = ({onInputSubmit,onInputChange,statevar}) => {
  return (
    <div>
          <input
            name="VideoUrlEntry"
            type="url"
            placeholder="Video URL"
            className="grey-border margin1rem"
            onChange={onInputChange}
            id={statevar}>
          </input>

          <div className="clickCursor textCenter compareButton padding1rem"
            onClick={onInputSubmit}>
            Compare
          </div>
    </div>
  );
}

export default UrlInput;
