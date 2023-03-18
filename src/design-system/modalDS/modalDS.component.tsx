// @flow
import * as React from 'react';
import { useState } from 'react';

import { Button } from '../../components/button/button.component';
import { Modal } from '../../components/modal/modal.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { Highlight } from '../highlight/highlight.component';
import { ModalCSSSample, ModalExampleSample, ModalTSXSample } from './modal-sample';

export const ModalDS = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section id="modal-ds" className="modal-ds">
      <h4 className="heading">Modal</h4>
      <p className="paragraph--medium">
        Modal window is a very simple modal that can display title, description, and two action buttons. There are four
        required parameters, open setter <Highlight>open(boolean)</Highlight>, once the window closes{' '}
        <Highlight>onClose</Highlight>, <Highlight>title</Highlight>, function of the primary button{' '}
        <Highlight>primaryAction</Highlight>, and content of the button <Highlight>primaryBtnContent</Highlight>. we can
        also add description of the modal <Highlight>desc</Highlight> and second outline button{' '}
        <Highlight>secondaryBtnContent</Highlight>, <Highlight>secondaryAction</Highlight>. There are only two buttons
        to achieve the best contrast.
      </p>
      <Button className="outline" onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>
      <Modal
        primaryBtnContent="Close Primary"
        secondaryBtnContent="Close Secondary"
        primaryAction={() => setOpenModal(false)}
        secondaryAction={() => setOpenModal(false)}
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Title text"
        desc="Description text"
      />

      <CodeSnippet SCSSCode={ModalCSSSample} exampleCode={ModalExampleSample} TSXCode={ModalTSXSample} />
    </section>
  );
};
