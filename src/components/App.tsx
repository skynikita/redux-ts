import {Provider} from "react-redux";
import {store} from '../state';
import RepostoriesList from './RepostoriesList'


const App = () => {
  return <Provider store={store}>
    <div>
      <h1>Search For a Package</h1>
      <RepostoriesList/>
    </div>
  </Provider>
};

export default App;
