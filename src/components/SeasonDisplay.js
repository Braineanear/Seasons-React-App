import React from 'react';

import './SeasonDisplay.css';

const seasonConfigs = {
  summer: {
    text: 'Lets hit the Beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it\'s cold',
    iconName: 'snowflake'
  }
};

const getSeasons = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeasons(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfigs[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
