import React from 'react';

export default function Login() {
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
        console.log(data);
      });
  };

  return (
    <div className="page">
      <form onSubmit={signIn}>
        <input type="text" placeholder="Username" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button>Enviar</button>
      </form>
    </div>
  );
}
