import React, {useState, useEffect} from 'react';

const Counter = props => {

	const [counter, setCount] = useState(0)
	const [name, setName] = useState('empty')

	useEffect(() => {
    document.title = `You clicked ${counter} times`;
    return () => console.log('unmount counter')
  });

  return (
      <div className="Counter">
      <h1>{props.name}</h1>
		 	    The counter | <button onClick={() => setCount(counter + 1)}> count + </button> {counter}<br /><br/>
		 	    The Name <input onChange={(e) => setName(e.target.value)} onFocus={() => setName('')} type="text" value={name} /> {name}:<br /><br/>
		  </div>
  )
}

export default Counter