import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import actions from './../actions/videoList.js';

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
let changeAutoplay = actions.changeAutoplay;
const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
    handleAutoplaySwitch: (autoplay) => dispatch(changeAutoplay(autoplay))
  };
}
const mapStateToProps = (state) => {
  return {
    videos: state.videoList,
    autoplay: state.autoplay
  };
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
