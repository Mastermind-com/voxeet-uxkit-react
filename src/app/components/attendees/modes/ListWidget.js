import React, { Component } from "react";
import PropTypes from "prop-types";

import ListWidgetItem from "./ListWidgetItem";

class ListWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      participants,
      toggleMicrophone,
      kickParticipant,
      isAdmin,
      isAdminActived,
      currentUser,
      isWebinar
    } = this.props;
    return (
      <div className="SidebarList">
        <ul className="list-items">
          {((!isWebinar && !currentUser.isListener) ||
            (isWebinar && isAdmin)) && (
            <ListWidgetItem
              isAdminActived={isAdminActived}
              participant={currentUser}
              isAdmin={isAdmin}
              mySelf={true}
            />
          )}
          {participants.map((participant, i) => {
            if (participant.isConnected)
              return (
                <ListWidgetItem
                  isAdminActived={isAdminActived}
                  participant={participant}
                  isAdmin={isAdmin}
                  key={i}
                  mySelf={false}
                  kickParticipant={kickParticipant}
                  toggleMicrophone={toggleMicrophone}
                />
              );
          })}
        </ul>
      </div>
    );
  }
}

ListWidget.propTypes = {
  participants: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isWebinar: PropTypes.bool.isRequired,
  isAdminActived: PropTypes.bool.isRequired,
  toggleMicrophone: PropTypes.func.isRequired,
  kickParticipant: PropTypes.func.isRequired
};

export default ListWidget;
