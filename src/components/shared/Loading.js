import React from 'react';
import loading from '../../assets/loading.gif';

export default function Loading() {
   return (
      <div>
         <header className='App-header'>
            <img src={loading} className='App-logo' alt='logo' />
         </header>
      </div>
   );
}
