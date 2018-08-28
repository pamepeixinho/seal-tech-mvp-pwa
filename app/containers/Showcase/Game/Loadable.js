/**
 *
 * Asynchronously loads the component for StartClass
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "showcaseGame" */ './index'),
  loading: () => null,
});
