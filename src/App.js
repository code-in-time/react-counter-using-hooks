import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact'

const  App = () => {
	useEffect(() => {
		return () => { console.log('unmount App') }
  });

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact  component={Home}/>
					<Route path="/contact" component={Contact}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
