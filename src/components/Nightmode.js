import React from "react";
import StyledNightmode from "./styles/StyledNightmode";

const Nightmode = ({ nightmodeCallback, nightMode }) => (
  <StyledNightmode>
    <span>Nightmode: </span>
    <label className='switch'>
      <input type='checkbox' checked={nightMode} onChange={nightmodeCallback} />
      <span className='slider round' />
    </label>
  </StyledNightmode>
);

export default Nightmode;
