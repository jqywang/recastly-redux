var changeVideoList = (videoList) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: "CHANGE_VIDEO_LIST",
  videoList,
});

var changeAutoplay = (autoplay) => ({
  type: "CHANGE_AUTOPLAY",
  autoplay
})

export default {changeVideoList, changeAutoplay};
