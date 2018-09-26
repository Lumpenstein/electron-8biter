import * as React from 'react';

import Main from './views/main/main';

export class App extends React.Component<any, any> {

  render() {
    return (
      <div>

        <h2>Welcome to my music maker!</h2>

        <Main/>

      </div>
    );
  }
}
