import React, { Component } from 'react'
import Joyride from 'react-joyride';


const MediaPermissionsTour = (props) => {
  const { goLive, callback } = props;
  const steps = [
    {
      content: (
        <>
          <p>Your're Going Live without your camera and/or microphone enabled. Would you like to proceed without enabling them?</p>
          <p>
            If you need more help you can consult our <a target='_blank' href='https://docs.mastermind.com/en/articles/4292128-troubleshooting-audio-video-not-detected'>article here</a>.
          </p>
          <button
            className='acknowledge'
            type="button"
            onClick={goLive}
          >
            Proceed
          </button>
        </>),
      disableBeacon: true,
      target: 'body',
      placement: 'center'
    }
  ];
  return (
    <Joyride
      callback={callback}
      steps={steps}
      styles={{
        options: {
          primaryColor: 'rgb(62, 68, 254)',
        }
      }}
    />
  )
}

export default MediaPermissionsTour;
