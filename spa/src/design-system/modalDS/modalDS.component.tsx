// @flow
import * as React from 'react';
import { Modal } from '../../components/modal/modal.component';
import { useState } from 'react';
import { Button } from '../../components/button/button.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { ModalCSSSample, ModalExampleSample, ModalTSXSample } from './modal-sample';
type Props = {};
export const ModalDS = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section id='modal-ds' className='modal-ds'>
      <h4 className='heading'>Modal</h4>
      <p className='paragraph--large'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eligendi sequi sint delectus officia quis
        architecto dicta voluptate repellat suscipit rem illo inventore autem totam, alias similique ut, nemo vero!
      </p>
      <Button className='outline' onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>
      <Modal
        primaryBtnContent='Close Primary'
        secondaryBtnContent='Close Secondary'
        primaryAction={() => setOpenModal(false)}
        secondaryAction={() => setOpenModal(false)}
        open={openModal}
        onClose={() => setOpenModal(false)}
        title='Test'
        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eligendi sequi sint delectus officia quis
        architecto dicta voluptate repellat suscipit rem illo inventore autem totam, alias similique ut, nemo vero!'
      />

      <CodeSnippet CSSCode={ModalCSSSample} exampleCode={ModalExampleSample} TSXCode={ModalTSXSample} />
    </section>
  );
};
