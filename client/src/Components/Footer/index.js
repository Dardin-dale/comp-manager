//Footer maybe contains some links? 
//Not sure what goes here yet.
import React from 'react';
import { useSelector } from 'react-redux';

function Footer () {
  const lang = useSelector(state => state.i18n.i18nData);

  return(
    <div>
        
    </div>
  );
}


export default Footer;