import {
  applyMiddleware,
  compose,
  createStore,
  Dispatch,
  Middleware,
  MiddlewareAPI,
} from 'redux';
import rootReducer from './reducers';

const composeEnhancers =
( window && ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

function logger() {
  const middleware: Middleware = ( { getState }: MiddlewareAPI ) => ( next: Dispatch ) => ( action ) => {
    // tslint:disable-next-line:no-console
    console.log( 'dispatching', action );
    const result = next( action );
    // tslint:disable-next-line:no-console
    console.log( 'next state', getState() );
    return result;
  };

  return middleware;
}

function configureStore( initialState?: {} ) {
  // configure middlewares
  const middlewares = applyMiddleware( logger() );
  // compose enhancers
  const enhancer = composeEnhancers( middlewares );
  // create store
  return createStore( rootReducer, initialState!, enhancer );
}

const store = configureStore();
export default store;
