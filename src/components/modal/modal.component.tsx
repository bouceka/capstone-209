// @flow
import * as React from 'react';

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
    <div onClick={onClose} className="modal__overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__container"
      >
        <div className="modal">
          <button className="modal__close-btn" onClick={onClose}>
            X
          </button>
          <div className="modal__content">
            <h2 className="heading">{title}</h2>
            <p className="paragraph--medium">{desc}</p>
          </div>
          <div className="modal__btn-container">
            <Button className="primary" onClick={primaryAction}>
              {primaryBtnContent}
            </Button>
            {secondaryAction ? (
              <Button className="outline" onClick={secondaryAction}>
                {secondaryBtnContent}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
