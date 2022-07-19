import React, { useState, useEffect } from 'react';
import CardList from'./CardList'
import SearchBox from'./SearchBox'
import Scroll from './Scroll.js'
import './App.css'

function App() {

	const  [robots, setRobots] = useState([])
	const [searchfield, setSearchfield] = useState("")

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> setRobots(users))
			console.log(robots, searchfield)
	},[])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

	const filteredRobots = robots.filter(robots => {
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	return !robots.length ?
		<h1>Loading</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
}

export default App
