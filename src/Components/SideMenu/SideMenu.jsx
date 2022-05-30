import React, { useState } from "react";
import MenuIcons from "./MenuIcons";
import './sidemenu.css';
function SideMenu() {
  const [isExpand, setIsExpand] = useState(true);
  return (
    <div className={isExpand ? 'expanded-sidemenu' : 'reduced-sidemenu'}>
      <div className="sidemenu__body">
        {isExpand
        ? <div onClick={() => setIsExpand(false)} className="expand"></div>
        : <div onClick={() => setIsExpand(true)} className="reduce"></div>
        }
        <MenuIcons isExpand={isExpand}/>
      </div>
    </div>
  )
}

export default SideMenu;