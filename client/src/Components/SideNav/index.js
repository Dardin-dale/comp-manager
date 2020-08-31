/* Side Navigator links to all of the main pages that are User Specific
    
    MyEntries
    MyComps
    NewComp

    Disabled if User not Signed in/Signed up.
    visible on all pages in desktop
    hidden on mobile.
*/

import React from 'react';
import { useSelector } from 'react-redux';

function SideNav () {
    const lang = useSelector(state => state.i18n.i18nData);

    return(
        <div>
            
        </div>

    );

}

export default SideNav;

