import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer/themes/duotoneLight';
import { classMaker } from './helpers/classes';

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
      <div className={sc('code')}>
        <Highlight {...defaultProps} theme={lightTheme} code={props.code} language="jsx">
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
      </div>
    </div>
  );
};
export default CodeItem;
