import React, { useState } from 'react';

import { MdMoreHoriz } from 'react-icons/md';
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
          <p>Visualizar</p>
          <p>Editar</p>
          <p>Excluir</p>
        </Option>
      </OptionList>
    </Container>
  );
}
