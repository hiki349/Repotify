import { RouterProvider } from 'react-router-dom';

import { IntlProvider } from '@utils/intl';
import { router } from '@utils/router';

import './App.css';

const App = () => (
  <IntlProvider>
    <RouterProvider router={router} />
  </IntlProvider>
);

export default App;
