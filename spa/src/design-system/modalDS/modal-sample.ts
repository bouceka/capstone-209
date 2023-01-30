export const ModalExampleSample = `<Modal
primaryBtnContent='Close Primary'
secondaryBtnContent='Close Secondary'
primaryAction={() => setOpenModal(false)}
secondaryAction={() => setOpenModal(false)}
open={openModal}
onClose={() => setOpenModal(false)}
title='Title text'
desc='Description text'
/>`;

export const ModalCSSSample = `.modal {
    width: 100%;
  
    &__overlay {
      background-color: $text-black-secondary;
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 12;
      top: 0;
      left: 0;
    }
    &__container {
      max-width: 64rem;
      width: 100%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      background-color: #ffffff;
      border-radius: 0.5rem;
      padding: 1.6rem;
    }
  
    &__close-btn {
      position: fixed;
      top: 0px;
      right: 0px;
      border-radius: 0 0.5rem 0 0.2rem;
      text-decoration: none;
      transition: all 0.2s;
      padding: 1rem 2.4rem;
      cursor: pointer;
      border: none;
      white-space: nowrap;
    }
  
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 1.6rem;
      margin: 3.6rem 0;
      padding: 1rem 2rem;
    }
  
    &__btn-container {
      display: flex;
      gap: 1.6rem;
  
      & > * {
        width: 100%;
      }
    }
  }`;
export const ModalTSXSample = `import * as React from 'react';
import { Button } from '../button/button.component';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  desc?: string;
  primaryAction: () => void;
  secondaryAction?: () => void;
  primaryBtnContent: string;
  secondaryBtnContent?: string;
};

export const Modal = ({
  open,
  onClose,
  title,
  desc,
  primaryAction,
  secondaryAction,
  primaryBtnContent,
  secondaryBtnContent,
}: Props) =>
  !open ? null : (
    <div onClick={onClose} className='modal__overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modal__container'
      >
        <div className='modal'>
          <button className='modal__close-btn' onClick={onClose}>
            X
          </button>
          <div className='modal__content'>
            <h2 className='heading'>{title}</h2>
            <p className='paragraph--medium'>{desc}</p>
          </div>
          <div className='modal__btn-container'>
            <Button className='primary' onClick={primaryAction}>
              {primaryBtnContent}
            </Button>
            {secondaryAction ? (
              <Button className='outline' onClick={secondaryAction}>
                {secondaryBtnContent}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );`;
