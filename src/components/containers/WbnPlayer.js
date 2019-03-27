import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Video from "../Video";
import Playlist from "../containers/Playlist";
import StyledWbnPlayer from "../styles/StyledWbnPlayer";

const theme = {
  bgcolor: "#353535",
  bgcoloritem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff"
};

const themeLight = {
  bgcolor: "#fff",
  bgcoloritem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535"
};

const WbnPlayer = props => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);

  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false
  });

  useEffect(
    () => {
      const videoId = props.match.params.activeVideo;
      if (videoId !== undefined) {
        const newActiveVideo = state.videos.findIndex(
          video => video.id === videoId
        );
        setState({
          ...state,
          activeVideo: state.videos[newActiveVideo],
          autoplay: props.location.autoplay,
        })
      } else {
        props.history.push({
          pathname: `/${state.activeVideo.id}`,
          autoplay: false
        })
      }
    },
    [props.match.params.activeVideo]
  )

  const nightModeCallback = () => { };

  const endCallback = () => { };

  const progressCallback = () => { };

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.video !== null ? (
        <StyledWbnPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledWbnPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default WbnPlayer;
