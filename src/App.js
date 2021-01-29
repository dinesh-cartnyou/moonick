import React, { Fragment, useEffect } from 'react';
import { Layout } from './Layout';
import setAuthToken from './utils/setAuthToken';

import { Provider } from 'react-redux';
import store from './store';
import UseHeaderchange from './utils/global-functions/use-Header-change';

function App() {

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // store.dispatch(loadUser());

    window.addEventListener('storage', () => {
      if (!localStorage.token) {
        // store.dispatch({ type: LOGOUT });
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Layout></Layout>
      </Fragment>
    </Provider>
  );
}

export default App;
