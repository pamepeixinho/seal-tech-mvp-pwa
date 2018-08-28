import ShowcaseInitial from 'containers/Showcase/Landing/Loadable';
import ShowcaseGame from 'containers/Showcase/Game/Loadable';
import ShowcaseFinish from 'containers/Showcase/Finish/Loadable';

const showcase = '/showcase';

const showcaseRoutes = ([
  {
    path: showcase,
    component: ShowcaseInitial,
  }, {
    path: `${showcase}/game`,
    component: ShowcaseGame,
  },
  {
    path: `${showcase}/finish`,
    component: ShowcaseFinish,
  },
]);

export default showcaseRoutes;
