import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData';

var videoListReducer = (state = exampleVideoData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if(action.type === "CHANGE_VIDEO_LIST") {
    return action.videos;
  } else {
    return state;
  }
};

export default videoListReducer;
