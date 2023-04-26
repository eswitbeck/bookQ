import React from 'react';
import { useSelector } from 'react-redux';
import MainContainer from './client/components/mainContainer.jsx';
import PopupContainer from './client/components/popupContainer.jsx';
import './style.css';

/* pull Boolean (or enum) from appState (useSelector)       */
/* hypothetical define body as conditional                  */
/* then render the switch of mainContainer v popupContainer */

export default () => {
  const popup = useSelector(state => state.appState.popupStatus);

  return (
    <>
      {popup !== 'closed' ? <PopupContainer /> : null}
      <MainContainer />
    </>
  );
};
