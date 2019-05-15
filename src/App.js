import React, {useState} from 'react';


const  App = () => {

	const [counter, setCount] = useState(0)
	const [name, setName] = useState('empty')

	return (
		<div className="App">
			 :The counter | <button onClick={() => setCount(counter + 1)}> count + </button> {counter}<br /><br/>
			The Name <input onChange={(e) => setName(e.target.value)} onFocus={() => setName('')} type="text" value={name} /> {name}:<br /><br/>

			
		</div>
	);
}

export default App;
