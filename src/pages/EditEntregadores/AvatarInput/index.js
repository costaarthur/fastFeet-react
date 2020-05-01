import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

import api from '../../../services/api';

export default function AvatarInput({ avatar }) {
  const { defaultValue, registerField } = useField('avatar_id');

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar_id">
        <img
          // selectedDestinatario.map(dest => dest.email)
          src={
            preview ||
            avatar.map(a => {
              if (a) {
                return a.url;
              }
              return 'https://api.adorable.io/avatars/51/abott@adorable.png';
            })
            // preview ||
            // avatar ||
            // 'https://api.adorable.io/avatars/51/abott@adorable.png'
          }
          alt="avatar"
        />

        <input
          type="file"
          id="avatar_id"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
