import React, { useContext } from 'react';
import { UserContext } from "./Context/UserContext.jsx";

function HomePage(props) {

    const {user, setUser} = useContext(UserContext);

    return (

        <div>
            <h3 className="h3-primary">Home Page</h3>
            { JSON.stringify(user, null, 2) }
        </div>
    );
}

export default HomePage;