import searchYouTube from '../lib/searchYouTube.js';
import reducers from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

let changeVideoList = reducers.changeVideoList;

var handleVideoSearch = (q) => {
  return (dispatch) => {
    let options = {
      key: YOUTUBE_API_KEY,
      query: q,
    };
    searchYouTube(options, (data) => {
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    })
  }
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
