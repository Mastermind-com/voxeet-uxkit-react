export const Types = {
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
    clearInterval(this._interval);
  }
}
