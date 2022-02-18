import React, { useContext } from 'react';
import { userContext } from './../context/UserContext';

export default function Login() {
  const { user, setUser } = useContext(userContext);

  const signIn = (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    fetch('https://backendtzuzulcode.wl.r.appspot.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success !== true) {
          alert(data.message);
        } else {
          console.log(data);
          setUser({ loggedIn: true, name: data.data.firstName });
          window.location.replace('http://localhost:3000/');
        }
      })
      .catch((error) => {
        console.log('errors', error);
      });
  };

  // return user.loggedIn ?
  return (
    <div className="page">
      <form onSubmit={signIn}>
        <input type="text" placeholder="Username" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button>Enviar</button>
      </form>
    </div>
    // ) : (
    //   window.location.replace('http://localhost:3000/')
  );
}
