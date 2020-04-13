import React, { useState } from 'react';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';
import { Container, ThreeDots, OptionList, Option } from './styles';

export default function EncomendaOptions() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <ThreeDots type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz color="#c6c6c6" size={20} />
      </ThreeDots>

      <OptionList visible={visible}>
        <Option>
          <button type="submit">
            <MdVisibility color="#8E5BE8" />
            Visualizar
          </button>
          <button type="submit">
            <MdCreate color="#4D85EE" />
            Editar
          </button>
          <button type="submit">
            <MdDeleteForever color="#DE3B3B" />
            Excluir
          </button>
        </Option>
      </OptionList>
    </Container>
  );
}
