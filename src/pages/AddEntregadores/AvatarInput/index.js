import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdInsertPhoto } from 'react-icons/md';

import { Container, InputFileButton } from './styles';

import api from '../../../services/api';

export default function AvatarInput() {
  const { registerField } = useField('avatar_id');

  const [inputFileIsHidden, setInputFileIsHidden] = useState(false);
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

    setInputFileIsHidden(true);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  function clickInputFile() {
    document.getElementById('avatar_id').click();
  }

  return (
    <Container>
      <label htmlFor="avatar_id">
        {preview ? <img src={preview} alt="avatar" /> : <h6> </h6>}
      </label>

      <input
        type="file"
        id="avatar_id"
        accept="image/*"
        data-file={file}
        onChange={handleChange}
        ref={ref}
      />

      <InputFileButton
        type="button"
        className="circle"
        onClick={clickInputFile}
        hidden={inputFileIsHidden}
      >
        <MdInsertPhoto />
        <h6>Adicionar foto</h6>
      </InputFileButton>
    </Container>
  );
}
