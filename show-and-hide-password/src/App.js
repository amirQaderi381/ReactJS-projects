import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

function App() {

  const [type, setType] = useState("password");
  const [icon,setIcon] = useState(eyeOff);

  const handleClick = () => {

    if (type === 'password') {
      setType('text');
      setIcon(eye);

    } else {
      setType('password');
      setIcon(eyeOff);
    }

  }

  return (

    <div className="App">
      <div className="wrapper">
        <div className="input-fields">
          <span onClick={handleClick}>{<Icon size={25} icon={icon} />}</span>
          <input type={type} />
        </div>
      </div>
    </div>

  );
}

export default App;
