import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { strings } from "../../../languages/localizedStrings";
import RecordingOn from "../../../../static/images/icons/btn-record-recording.svg";
import RecordingOff from "../../../../static/images/icons/btn-record-live.svg";
import { connect } from "@voxeet/react-redux-5.1.1";
import { sprintf } from "sprintf-js";

@connect(state => {
  return {
    recordingTimerStore: state.voxeet.recordingTimer
  };
})

class ToggleRecordingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
      hover: false
    };
  }

  statusMessage() {
    return this.props.isRecording ?
        strings.recording
        :
        strings.record
  }

  render() {
    const {
      isRecording,
      toggle,
      tooltipPlace,
      isBottomBar,
      recordingLocked,
    } = this.props;
    const { hover, isMobile } = this.state;
    const { recording_time } = this.props.recordingTimerStore;
    return (
      <li
        className={isRecording || recordingLocked ? "active" : ""}
        onMouseEnter={() => {
          !isMobile && this.setState({ hover: true });
        }}
        onMouseLeave={() => {
          !isMobile && this.setState({ hover: false });
        }}
      >
        <a
          data-tip
          data-for="toggle-recording"
          className={"" + (isRecording || recordingLocked ? "on" : "off")}
          title={strings.record}
          onClick={() => toggle()}
        >
          <img
            src={
              isRecording || hover || recordingLocked
                ? RecordingOn
                : RecordingOff
            }
          />
          {isBottomBar && (
            <>
              <div>
                <span>{isRecording ? this.formatTime(recording_time) : strings.record}</span>
              </div>
            </>
          )}
        </a>
        {!isBottomBar && (
          <ReactTooltip
            id="toggle-recording"
            place={tooltipPlace}
            effect="solid"
            className="tooltip"
          >
            {this.statusMessage()}
          </ReactTooltip>
        )}
      </li>
    );
  }

  formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return sprintf('%02u:%02u:%02u', hours, minutes, seconds);
  }
}

ToggleRecordingButton.propTypes = {
  isRecording: PropTypes.bool.isRequired,
  recordingLocked: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  tooltipPlace: PropTypes.string.isRequired,
  isBottomBar: PropTypes.bool.isRequired,
  recordingTime: PropTypes.number,
};

ToggleRecordingButton.defaultProps = {
  tooltipPlace: "right"
};

export default ToggleRecordingButton;
