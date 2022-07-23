import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import RhythmGame from './component/RhythmGame';
import NotFound from './component/NotFound';

const App = () => {
	return (
		<div className='App'>
			<Main />
		</div>
	);
}

export default App;