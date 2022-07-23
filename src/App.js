import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import RhythmGame from './component/RhythmGame';
import NotFound from './component/NotFound';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/rhythmgame' element={<RhythmGame />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;