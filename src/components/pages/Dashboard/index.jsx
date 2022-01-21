import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashborard() {


    const [name, setname] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        let name = localStorage.getItem('name')
        setname(name)
        console.log(name)

    }, []);

    const logout = () => {

        localStorage.removeItem('name')
        navigate('/')

    }

    return <div>
        <h1>Hello {name}</h1>
        <button onClick={logout}>Sign out</button>
    </div>;
}

export default Dashborard;
