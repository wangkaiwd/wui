import React, {Fragment} from 'react';

interface DialogProps {
  visible: boolean
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  return (
    <Fragment>
      <div className={'wui-dialog'}>
        <header>
          title
        </header>
        <main>
          content
        </main>
        <footer>
          buttons
        </footer>
      </div>
      <div className={'wui-mask'}></div>
    </Fragment>
  );
};
export default Dialog;
