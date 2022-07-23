import React from 'react';
import { Link } from 'react-router-dom';
const Main = (props) => {
	return (
		<>
			<h3>안녕하세요. 아르케아는 망겜입니다.</h3>
            <Link to="/rhythmgame"><h4>망겜하러 가기</h4></Link>
		</>
	);
};

export default Main;