import HomePage from 'containers/HomePage/Loadable';
import StartClass from 'containers/StartClass/Loadable';
import FinishClass from 'containers/FinishClass/Loadable';

const trainning = '/treinamento';

const trainningRoutes = ([
  {
    path: trainning,
    component: HomePage,
  },
  {
    path: `${trainning}/comecar-aula/:id`,
    component: StartClass,
  },
  {
    path: `${trainning}/finalizar-aula/:id`,
    component: FinishClass,
  },
]);

export default trainningRoutes;
