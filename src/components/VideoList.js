import React from 'react';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({ videos, handleVideoListEntryTitleClick, handleAutoplaySwitch, autoplay}) => (
  <div className="video-list">
    <p>Toggle Autoplay</p>
    <input type="checkbox" onChange={(e) => {
      console.log(autoplay);
      handleAutoplaySwitch(!autoplay);
    }}/>
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
