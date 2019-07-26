import React from 'react';

interface Props {

}

const DemoBlock: React.FC<Props> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default DemoBlock;
