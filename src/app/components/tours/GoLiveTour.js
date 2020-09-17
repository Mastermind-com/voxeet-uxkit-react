import React, { Component } from 'react'
import Joyride from 'react-joyride';

const steps = [
  {
    target: '.go-live-btn',
    content: "Press the 'Go Live' button to allow members to join this session",
    disableBeacon: true,
  }
];

const GoLiveTour = (props) => {
  return (
    <Joyride 
      steps={steps}
      styles={{
        options: {
          primaryColor: 'rgb(62, 68, 254)',
        }
      }}
    />
  )
}

export default GoLiveTour;
