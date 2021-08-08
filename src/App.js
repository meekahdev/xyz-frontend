
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyPost from './Components/MyPost/MyPost';
import Home from './Components/Home/Home';
import {BrowserRouter , Route} from 'react-router-dom'
import Protected from './HOC/Protected';
import DetailPost from './Components/DetailPost/DetailPost';
import CreatePost from './Components/MyPost/CreatePost/CreatePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>

          <Route exact path="/" > 
            <Protected component={Home}></Protected>
          </Route>
          <Route exact path="/my-post" > 
            <Protected component={MyPost}></Protected>
          </Route>
          <Route exact path="/my-post/create" > 
            <Protected component={CreatePost}></Protected>
          </Route>


          <Route exact path="/post/:id" render={(props) => (
              <Protected {...props} component={DetailPost} />
          )} />

          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
