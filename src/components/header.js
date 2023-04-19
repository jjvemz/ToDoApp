import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () =>{
    const router = useRouter();
    const [ access, setAccess] = useState('')

    useEffect(() =>{
        const getAccess = localStorage.getItem('accessToken');
        setAccess(getAccess);
    },[])

    const handleLogout = () =>{
        router.push(del())
    }

    return (
        <nav className=''>
          <Link href='/' className=''>Lista de tareas</Link>
          {access ? <button onClick={handleLogout} className={style.logout}>Logout</button> : <button className={style.logout}>Login</button>}
        </nav>
      )
}