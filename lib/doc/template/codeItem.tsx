import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { classMaker } from '../../helpers/classes';
import './codeItem.scss';
import Card from '../../components/card/card';

const sc = classMaker('code-item');

interface Props {
  code: string,
  title?: string
}

const CodeItem: React.FC<Props> = (props) => {
  return (
    <div className={sc()}>
      <div className={sc('body')}>
        {props.children}
      </div>
      <Card className={sc('code')} title={'代码演示'} border={false}>
        <Highlight {...defaultProps} theme={undefined} code={props.code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
            </pre>
          )}
        </Highlight>
      </Card>
    </div>
  );
};
export default CodeItem;
