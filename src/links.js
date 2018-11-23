import React from 'react';
import { Link } from 'react-router-dom';

export const SignUpLink = () => {
  return (
      <p>
        Don't have an account?
        <Link to='/signup'>
          Sign Up
        </Link>
      </p>
  );
};

export const SignInLink = () => {
  return (
      <p>
        Already have an account?
        <Link to='/signin'>
          Sign In
        </Link>
      </p>
  );
};