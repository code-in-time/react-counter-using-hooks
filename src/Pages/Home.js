import React, { useEffect} from 'react';
import Template from "./Template";
import Counter from "./Counter";

const Home = () => {
	useEffect(() => {
		return () => { console.log('unmount home') }
  },[]);

  return (
    <Template>
      <div>
        homePage
      </div>

      <Counter name='text name' />

    </Template>
  )
}

export default Home