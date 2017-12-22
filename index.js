import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);
// https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html


store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});
