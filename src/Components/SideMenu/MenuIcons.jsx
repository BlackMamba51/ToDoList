import React, { useState } from "react";

function MenuIcons({ isExpand }) {
  return (
    <div className="menu">
      <li className="menu-links">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{width: 40, height: 40}}>
          <g id="design">
            <g>
              <path className="st1" d="M19.25,4h-2.5V2.75C16.75,2.34,16.41,2,16,2s-0.75,0.34-0.75,0.75V4h-6.5V2.75C8.75,2.34,8.41,2,8,2
                S7.25,2.34,7.25,2.75V4h-2.5C3.79,4,3,4.79,3,5.75v13.5C3,20.22,3.79,21,4.75,21h14.5c0.96,0,1.75-0.78,1.75-1.75V5.75
                C21,4.79,20.21,4,19.25,4z M4.5,5.75c0-0.14,0.11-0.25,0.25-0.25h14.5c0.14,0,0.25,0.11,0.25,0.25V8h-15V5.75z M19.5,19.25
                c0,0.14-0.11,0.25-0.25,0.25H4.75c-0.14,0-0.25-0.11-0.25-0.25V9.5h15V19.25z"/>
              <g>
                <path className="st1" d="M8.01,14L8.01,14C7.45,14,7,13.55,7,13c0-0.55,0.45-1,1-1s1,0.45,1,1C9,13.55,8.56,14,8.01,14z"/>
                <path className="st1" d="M12,14c-0.55,0-1-0.45-1-1c0-0.55,0.44-1,1-1H12c0.55,0,1,0.45,1,1C13,13.55,12.56,14,12,14z"/>
                <path className="st1" d="M16,14c-0.55,0-1-0.45-1-1c0-0.55,0.44-1,1-1H16c0.55,0,1,0.45,1,1C17,13.55,16.55,14,16,14z"/>
              </g>
              <path className="st1" d="M8.01,17.5L8.01,17.5c-0.56,0-1.01-0.45-1.01-1s0.45-1,1-1s1,0.45,1,1S8.56,17.5,8.01,17.5z"/>
              <path className="st1" d="M12,17.5c-0.55,0-1-0.45-1-1s0.44-1,1-1H12c0.55,0,1,0.45,1,1S12.56,17.5,12,17.5z"/>
            </g>
          </g>
        </svg>
        <span className={isExpand ? 'link-text link-text-color' : ' link-text link-text-opacity'}>Calendar</span>
      </li>
    </div>
  )
}

export default MenuIcons;