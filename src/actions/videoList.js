var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: "VIDEO_LIST_CHANGED",
  videoList: videos,
});

export default changeVideoList;
