import React, {useEffect} from 'react';

import Template from "./Template";

const Contact = () => {
	useEffect(() => {
		return () => { console.log('unmount contact') }
  });

  return (
    <Template>
      <div>
        Contact
      </div>
    </Template>
  )
}

export default Contact