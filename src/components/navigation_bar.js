import React from 'react';
import './styles/navigation_bar.css'

function NavigationBar({ resultDisplayMode, handleDisplayModeChange }) {

  return(
    <div className="navigationBar">
      <form>
        <label>
          <input type="text" name="searchBox" />
        </label>

        <label>
          <input type="checkbox" name="grid-or-list" onClick={handleDisplayModeChange}/>
        </label>

        <input type="submit" value="Search" />
      </form> 
    </div>
  );
}

export default NavigationBar
