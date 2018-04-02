var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: "VIDEO_CHANGED",
  newVid: video,
});

export default changeVideo;
