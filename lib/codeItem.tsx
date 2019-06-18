import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/duotoneLight';
// @ts-ignore
import x from '!!raw-loader!./icon/icon.example';

const CodeItem: React.FC = (props) => {
  return (
    <Highlight {...defaultProps} theme={darkTheme} code={x} language="jsx">
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
  );
};
export default CodeItem;
