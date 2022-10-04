import React from 'react';

import Modal from '~/components/Modal';
import Button from '~/components/Button';

import {Container, Header, Body, Footer} from './styles';

export default function Update({open, data, ...rest}) {
  return (
    <Modal {...rest} display={open ? 1 : 0}>
      <Container>
        <Header>X Update tool</Header>

        <Body>Are you sure want to update {data.title}</Body>

        <Footer>
          <Button border onClick={() => rest.onClose(false)} text="Cancel" />
          <Button
            border
            onClick={() => rest.onUpdate(data)}
            text="Yes, Update"
          />
        </Footer>
      </Container>
    </Modal>
  );
}
