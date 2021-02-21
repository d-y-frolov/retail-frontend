import './App.css';
import {BrowserRouter, Link,Router,Redirect,Route,Switch} from 'react-router-dom';
import Navigator from './components/library/Navigator';
import {PATH_CASH,PATH_BACKOFFICE,PATH_REPORTS,PATH_RETAIL} from './config/menu';
import Backoffice from './components/pages/backoffice/Backoffice';
import Cash from './components/pages/cash/Cash';
import Report from './components/pages/report/Report';
import Retail from './components/pages/retail/Retail';
function App() {
  return (
    <BrowserRouter>
      <Navigator/>
      <Switch>
        <Route path={PATH_CASH} exact component={Cash}/>
        <Route path={PATH_BACKOFFICE} exact component={Backoffice}/>
        <Route path={PATH_REPORTS} exact component={Report}/>
        <Route path={PATH_RETAIL} exact component={Retail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
