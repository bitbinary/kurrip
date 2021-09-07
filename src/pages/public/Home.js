import React from 'react';
import loading from '../../assets/loading.gif';
// import logo from '../../assets/logo.png';
import logotext from '../../assets/logotext.png';
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';
import Profile from '../../components/Profile';

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo" />
        <img src={logotext} className="App-logo-text" alt="logo" />
      </header>
    </div>
  );
}
