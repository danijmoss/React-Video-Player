import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";
import StyledPlayList from "../styles/StyledPlaylist";

const Playlist = props => (
  <StyledPlayList>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlayList>
);

export default Playlist;
