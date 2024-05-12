import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';
import React from 'react';
const  LoginPage: React.FC = async() =>{

  const session = await getServerSession();
  if (session) {
    redirect('/');
  }

  return <Form />;
}
export default LoginPage;