import HomePage from 'containers/Trainning/HomePage/Loadable';
import StartClass from 'containers/Trainning/StartClass/Loadable';
import FinishClass from 'containers/Trainning/FinishClass/Loadable';

const trainning = '/trainning';

const trainningRoutes = ([
  {
    path: trainning,
    component: HomePage,
  },
  {
    path: `${trainning}/start-class/:id`,
    component: StartClass,
  },
  {
    path: `${trainning}/finish-class/:id`,
    component: FinishClass,
  },
]);

export default trainningRoutes;
