export const Types = {
  START_RECORDING_TIMER: "START_RECORDING_TIMER",
  STOP_RECORDING_TIMER: "STOP_RECORDING_TIMER",
  INCREMENT_RECORDING_TIMER: "INCREMENT_RECORDING_TIMER"
};

export class Actions {
  static startRecordingTime() {
    return dispatch => {
      this._interval = setInterval(() => {
        return dispatch({
          type: Types.INCREMENT_RECORDING_TIMER,
        });
      }, 1000);
    };
  }

  static stopRecordingTime() {
    return dispatch => {
      clearInterval(this._interval);
      return dispatch({
        type: Types.INCREMENT_RECORDING_TIMER,
      });
    };
  }

  static incrementRecordingTime() {
    return {
      type: Types.INCREMENT_RECORDING_TIMER
    };
  }
}
