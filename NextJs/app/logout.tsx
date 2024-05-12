'use client';

import { signOut } from 'next-auth/react';

const Logout: React.FC = ()=> {
  return (
    <span
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </span>
  );
}
export default Logout;
