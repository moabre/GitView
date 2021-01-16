import logo from './logo.svg'
import './App.css'
import Home from './Components/Home/Home'
import UserData from './Components/UserData/UserData'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/user/:id' component={UserData} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
