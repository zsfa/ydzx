import React, {Component} from 'react';
import {HashRouter as Router,Route,NavLink,Link,Switch,Redirect} from 'react-router-dom'
import Home from './components/home/home'
import Video from './components/video/video'
import Find from './components/find/find'
import ShortVideo from './components/shortVideo/shortVideo'
import User from './components/user/user'
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<Router>
					<div>
							<Switch>
								<Route path="/home" component={Home}/>
								<Route path="/video" component={Video}/>
								<Route path="/find" component={Find}/>
								<Route path="/shortVideo" component={ShortVideo}/>
								<Route path="/user" component={User}/>
								<Redirect path="/" to="/home"/>
							</Switch>
							<div id="footer">
								<ul>
									<li><NavLink to="/home"><i></i><span>首页</span></NavLink></li>
									<li><NavLink to="/video"><i></i><span>视频</span></NavLink></li>
									<li><NavLink to="/find"><i></i><span>发现</span></NavLink></li>
									<li><NavLink to="/shortVideo"><i></i><span>小视频</span></NavLink></li>
									<li><NavLink to="/User"><i></i><span>未登录</span></NavLink></li>
								</ul>
							</div>
					</div>
				</Router>
			</Provider>
    )
  }
}

export default App;
