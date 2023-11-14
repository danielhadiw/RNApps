import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

const CraftSvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="m22.33 9.738-2.353 2.392c-.44.447-1.16.453-1.607.013l-3.286-3.23-4.39 4.376a1.648 1.648 0 0 1-.278 2.215l-3.202 2.71-2.71 3.203a1.648 1.648 0 0 1-2.424.1L.483 19.92a1.648 1.648 0 0 1 .1-2.424l3.203-2.71 2.71-3.202a1.648 1.648 0 0 1 2.263-.242l4.368-4.355-4.364-4.291A1.136 1.136 0 0 1 9.357.768l4.04-.734c.363-.066.736.049.999.308l7.92 7.789c.448.44.454 1.16.014 1.607Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default memo(CraftSvgComponent);
