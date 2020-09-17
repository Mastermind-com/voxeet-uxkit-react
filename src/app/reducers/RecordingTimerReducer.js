import { Types } from "../actions/RecordingTimerActions";

const defaultState = {
  recording_time: 0
};

const RecordingTimerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.INCREMENT_RECORDING_TIMER:
      return {
        recording_time: state.recording_time + 1
      };
    default:
      return state;
  }
};

export default RecordingTimerReducer;
