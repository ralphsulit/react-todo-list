import { Fragment } from 'react';

import Home from './components/home/home.component';


function App() {
  return (
    <Fragment>
      <section className='h-screen flex justify-center items-center'>
        <Home />
      </section>
    </Fragment>
  );
}

export default App;
