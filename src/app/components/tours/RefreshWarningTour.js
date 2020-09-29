import React, { Component } from 'react'
import Joyride from 'react-joyride';

const steps = [
  {
    content: (
      <>
        <p>We advice against reloading this page as bugs may occur.</p>
        <p>If you want to reload this page, navigate back, wait one minute and then reconnect to the session.</p>
      </>
    ),
    disableBeacon: true,
    target: 'body',
    placement: 'center'
  }
];

const RefreshWarningTour = (props) => {
  return (
    <Joyride 
      steps={steps}
    />
  )
}

export default RefreshWarningTour;
