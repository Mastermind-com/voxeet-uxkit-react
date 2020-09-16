import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { strings } from "../../../languages/localizedStrings";
import GoLive from "../../../../static/images/icons/icon-go-live.png";

class GoLiveButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goLive, tooltipPlace, isBottomBar } = this.props;
    return (
      <li data-tip data-for="go-live">
        <a
          onClick={() => goLive()}
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
