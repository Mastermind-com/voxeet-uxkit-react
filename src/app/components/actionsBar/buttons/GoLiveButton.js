import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { strings } from "../../../languages/localizedStrings";
import GoLive from "../../../../static/images/icons/icon-go-live.png";
import { GoLiveTour, MediaPermissionsTour, EnableMediaTour } from "../../tours";
import { ACTIONS, EVENTS, LIFECYCLE, STATUS } from 'react-joyride';

class GoLiveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMediaPermissionsTour: false,
      showEnableMediaTour: false,
    };
    this.checkMedia = this.checkMedia.bind(this);
    this.handleMediaTourCallback = this.handleMediaTourCallback.bind(this);
    this.goLive = this.props.goLive;
  }

  checkMedia() {
    const { isMuted, videoEnabled } = this.props;
    if (isMuted || !videoEnabled) {
      this.setState({showEnableMediaTour: true});
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then((stream) => {
      this.goLive();
    })
    .catch((err) => {
      this.setState({showMediaPermissionsTour: true})
    });
  }

  handleMediaTourCallback(data) {
    const { action, index, status, type } = data;
    if (action == ACTIONS.CLOSE) {
      this.setState({showMediaPermissionsTour: false})
      this.setState({showEnableMediaTour: false})
    }
  }

  render() {
    const { goLive, tooltipPlace, isBottomBar } = this.props;
    return (
      <li data-tip data-for="go-live">
        <a
          onClick={this.checkMedia}
          className="go-live-btn"
          title={strings.go_live}
        >
          <img src={GoLive} />
          {isBottomBar && (
            <>
              <div>
                <span>{strings.go_live}</span>
              </div>
            </>
          )}
        </a>
        {!isBottomBar && (
          <ReactTooltip
            id="go-live"
            place={tooltipPlace}
            effect="solid"
            className="tooltip"
          >
            {strings.go_live}
          </ReactTooltip>
        )}
        <GoLiveTour/>
        {this.state.showMediaPermissionsTour && (
          <MediaPermissionsTour
            goLive={goLive}
            callback={this.handleMediaTourCallback}
          />
        )}
        {this.state.showEnableMediaTour && (
          <EnableMediaTour
            goLive={goLive}
            callback={this.handleMediaTourCallback}
          />
        )}
      </li>
    );
  }
}

GoLiveButton.propTypes = {
  goLive: PropTypes.func.isRequired,
  tooltipPlace: PropTypes.string.isRequired
};

GoLiveButton.defaultProps = {
  tooltipPlace: "right"
};

export default GoLiveButton;
