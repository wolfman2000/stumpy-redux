import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// tslint:disable-next-line: no-implicit-dependencies
import configureStore from 'redux-mock-store';

import App from './App';
import { StumpyState } from './store/reducers';

describe( 'The application', () => {
  const initialState: StumpyState = {
    dungeons: {},
    edges: [],
    inventory: {},
    nodes: [],
    settings: {
      bossShuffle: 0,
      dungeonItems: 0,
      gameType: 0,
      ganonVulernable: 0,
      glitches: 0,
      goal: 0,
      itemFunctionality: 0,
      itemPlacement: 1,
      itemPool: 0,
      openTower: 0,
      swords: 0,
    },
  };
  const mockStore = configureStore<StumpyState>();

  it( 'renders without crashing', () => {
    const store = mockStore( initialState );
    const div = document.createElement( 'div' );
    ReactDOM.render( <Provider store={store}><App /></Provider>, div );
    ReactDOM.unmountComponentAtNode( div );
  } );
} );

