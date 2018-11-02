
        //----------------------------------------------------------------------------------------------------------
        //Declariations and libraries
        //----------------------------------------------------------------------------------------------------------
        import React                                            from 'react';
        import ReactDOM                                         from 'react-dom';
        import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
        import { Provider }                                     from 'react-redux';
        import { createStore, applyMiddleware }                 from 'redux';
        import promise                                          from 'redux-promise';
        import createMemoryHistory                              from 'history/createMemoryHistory';
        import App                                              from './container/app.jsx';
       
        //----------------------------------------------------------------------------------------------------------
            //Parent Components
        //----------------------------------------------------------------------------------------------------------
        
        import feed from './components/feed.jsx'
import .iii_sketch_‘3‘ from './components/.iii sketch ‘3‘.jsx'
import live from './components/live.jsx'
import search from './components/search.jsx'
import follow from './components/follow.jsx'
import edit_profile from './components/edit profile.jsx'
import composite from './components/composite.jsx'
import get_started from './components/get started.jsx'
import notifications from './components/notifications.jsx'
       
        //----------------------------------------------------------------------------------------------------------
        //Reducer
        //----------------------------------------------------------------------------------------------------------
        import store                                            from './reducers/index.jsx';

        //----------------------------------------------------------------------------------------------------------
            //Middleware setup
        //----------------------------------------------------------------------------------------------------------
        const history                                 = createMemoryHistory();
        const createStoreWithMiddleware               = applyMiddleware(promise)(createStore);

        //----------------------------------------------------------------------------------------------------------
        //Routes Setup
        //----------------------------------------------------------------------------------------------------------
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        
                <Router basename="/" history={ history } >
                    <Switch>
                        <Route path "/" component={feed}
                        <Route path="/feed" component={feed} /> 
,<Route path="/.iii_sketch_‘3‘" component={.iii_sketch_‘3‘} /> 
,<Route path="/live" component={live} /> 
,<Route path="/search" component={search} /> 
,<Route path="/follow" component={follow} /> 
,<Route path="/edit_profile" component={edit_profile} /> 
,<Route path="/composite" component={composite} /> 
,<Route path="/get_started" component={get_started} /> 
,<Route path="/notifications" component={notifications} /> 

                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('app') || document.createElement('div')
          );
        