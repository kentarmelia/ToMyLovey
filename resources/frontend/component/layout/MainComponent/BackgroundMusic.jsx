import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundMusic = ({ isPlaying }) => {
  return (
    <ReactPlayer
      url="/Images/PALAGI.mp3"  // Path to the music file
      playing={isPlaying}        // Control playback based on the isPlaying state
      loop={true}                // Loop the music
      volume={0.5}               // Set volume level
      width="0"                  // Make the player invisible
      height="0"                 // Make the player invisible
    />
  );
};

export default BackgroundMusic;
