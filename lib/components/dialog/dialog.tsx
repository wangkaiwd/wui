import React from 'react';
import './dialog.scss';
import { classMaker } from '@/helpers/classes';

interface Props {
  visible: boolean
}

const sc = classMaker('dialog');
const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={sc()}>
      dialog
    </div>
  );
};

export default Dialog;
