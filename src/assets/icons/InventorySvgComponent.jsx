import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

const InventorySvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.3 3.3h1.65a2.753 2.753 0 0 1 2.75 2.75v3.3A1.652 1.652 0 0 1 17.05 11H14.3v-.55a.55.55 0 1 0-1.1 0V11H8.8v-.55a.55.55 0 0 0-1.1 0V11H4.95A1.652 1.652 0 0 1 3.3 9.35v-3.3A2.753 2.753 0 0 1 6.05 3.3H7.7V1.65C7.7.74 8.439.001 9.35 0h3.3c.91.001 1.649.74 1.65 1.65V3.3Zm-5.5 0h4.4V1.65a.55.55 0 0 0-.55-.55h-3.3a.55.55 0 0 0-.55.55V3.3Zm11 9.9h.55c.911.001 1.65.74 1.65 1.65v2.2a2.75 2.75 0 0 1-2.25 2.7c.027-.165.044-.332.05-.5V13.2Zm-17.6 0h-.55c-.91.001-1.649.74-1.65 1.65v2.2a2.75 2.75 0 0 0 2.25 2.7 3.773 3.773 0 0 1-.05-.5V13.2Zm12.1.55V12.1h2.75a2.723 2.723 0 0 0 1.65-.564v7.714A2.753 2.753 0 0 1 15.95 22h-9.9a2.753 2.753 0 0 1-2.75-2.75v-7.714a2.722 2.722 0 0 0 1.65.564H7.7v1.65a.55.55 0 0 0 1.1 0V12.1h4.4v1.65a.55.55 0 0 0 1.1 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default memo(InventorySvgComponent);
