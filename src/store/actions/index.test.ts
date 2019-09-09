import { updateSettings } from './';

describe( 'The store actions', () => {
  it( 'should create an action to update a setting.', () => {
    const value = 1; // representing Open.

    const payload = {
      key: 'gameType',
      value,
    };

    const expectedAction = updateSettings( payload );

    expect( expectedAction ).toBeDefined();
    expect( expectedAction.type ).toContain( 'settings' );
    expect( expectedAction.payload ).toEqual( payload );
  } );
} );
