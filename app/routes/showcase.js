import ShowcaseInitial from 'containers/Showcase/Landing/Loadable';
import ShowcaseGame from 'containers/Showcase/Game/Loadable';

const showcase = '/showcase';

const showcaseRoutes = ([
  {
    path: showcase,
    component: ShowcaseInitial,
  }, {
    path: `${showcase}/game`,
    component: ShowcaseGame,
  },
]);

export default showcaseRoutes;
