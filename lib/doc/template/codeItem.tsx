import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { classMaker } from '../../helpers/classes';
import './codeItem.scss';
import Card from '../../components/card/card';
import Icon from '@/components/icon/icon';

const sc = classMaker('code-item');

interface Props {
  code: string;
  title?: string;
  meta?: string;
}

const CodeItem: React.FC<Props> = (props) => {
  const extra = <Icon name={'try'}/>;
  return (
    <div className={sc()}>
      <Card
        border={false}
        title={props.title}
        meta={props.meta}
        hoverable
      >
        {props.children}
      </Card>
      <Card hoverable className={sc('code')} border={false} extra={extra}>
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
