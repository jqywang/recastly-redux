import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData';
var currentVideoReducer = (state = exampleVideoData[0], action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch(action.type){
    case 'CHANGE_VIDEO':
      return action.video;
    default:
      return state;
  }
};

var autoplayReducer = (state = false, action) => {
  if(action.type === 'CHANGE_AUTOPLAY') {
    return action.autoplay;
  } else {
    return state;
  }
}

export default {currentVideoReducer, autoplayReducer};
