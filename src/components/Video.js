import React, { Component } from 'react';

class Video extends Component {
  render(){
    const videoURL = "https://s3.amazonaws.com/reacdn/altrlabs/altr-labs-animation.mp4";

    return(
      <div id="introVideoHome">
        <video id="introVideo" width="100%" height="100%" autoPlay playsInline loop muted>
            <source src={videoURL} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Video;
