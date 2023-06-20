import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingsSlice';

const Greeting = () => {
  const { greeting } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  return (
    <div>
      <h1 className="text-center">{greeting.greeting}</h1>
    </div>
  );
};

export default Greeting;
