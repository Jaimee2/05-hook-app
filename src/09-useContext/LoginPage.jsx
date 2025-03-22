import React, { useContext } from 'react';
import { UserContext } from "./Context/UserContext.jsx";

function LoginPage(props) {

    const {user, setUser} = useContext(UserContext);
    console.log(user)


    return (
        <div className="container-primary">
            <h3 className="h3-primary">Login page</h3>
            <hr/>

            { JSON.stringify(user, null, 3) }
            <p className="p-2 text-xl">User name: { user?.name }</p>

            <button className="btn-primary"
                    onClick={ () => setUser({
                        id: 123,
                        name: "Jaime",
                        mail: "jaime@jaime.com"
                    }) }>
                Set user
            </button>
        </div>
    );
}

export default LoginPage;