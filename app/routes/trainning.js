import HomePage from 'containers/Trainning/HomePage/Loadable';
import StartClass from 'containers/Trainning/StartClass/Loadable';
import FinishClass from 'containers/Trainning/FinishClass/Loadable';

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
