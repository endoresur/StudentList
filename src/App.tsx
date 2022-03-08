import React, {useState} from 'react';
import Authorization from "./components/authorization/Authorization";
import Main from "./components/main/Main";

function App() {

    const [flag, setFlag] = useState(false);

    return (
        <div>
            {flag? <Authorization/> : <Main/>}
        </div>
    );
}

export default App;
