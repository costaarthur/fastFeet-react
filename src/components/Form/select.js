import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

// import { Container } from './styles';

export default function Select({ name }) {
  const selectRef = useRef(null);

  const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' },
  ];

  useEffect(() => {
    console.log(selectRef);
  }, [selectRef]);

  return <select ref={selectRef} options={options} />;
}
