redux-thunk é um middleware que, no contexto de uma aplicação Redux , nada mais é que um interceptador que captura todas as actions enviadas pela store antes delas chegarem a um reducer . Ou seja, fazendo analogia com pedido online de produto, se a action fosse o produto que você comprou em algum site, e o reducer fosse você, o middleware seria o correio, que intercepta o produto antes de chegar até você para garantir que ele chegue como se deve. Depois, se quiser ler mais sobre middlewares , acesse o Redux - Middleware na sessão de recursos adicionais.
Para fazer uso do redux-thunk , é preciso instalá-lo via npm :
npm install redux-thunk
Para habilitar o uso dele na sua aplicação, é preciso fazer uso da função applyMiddleware() do Redux :

// arquivo onde a redux store é criada
import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

...

const store = createStore(reducer, applyMiddleware(thunk));
...

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

// action creator que retorna um objeto, que você tem feito até então
const requestMovies = () => ({
  type: REQUEST_MOVIES});

// outro action creator que retorna um objeto, que você tem feito até então
const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies});

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchMovies() {
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('alguma-api-qualquer.com')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}

// componente onde você usaria a action creator fetchMovies assíncrona como uma outra qualquer
...
class MyConectedAppToRedux extends Component {
  ...
  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }
  ...
}
...