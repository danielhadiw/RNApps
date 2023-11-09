import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

const ProfileSvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Zm0-16.68a2.345 2.345 0 0 0-2.343 2.342c0 1.268.991 2.294 2.284 2.338a.395.395 0 0 1 .108 0h.035a2.337 2.337 0 0 0 2.259-2.338A2.345 2.345 0 0 0 11 5.32Zm2.887 6.9c-1.585-1.056-4.17-1.056-5.766 0-.722.483-1.12 1.137-1.12 1.835 0 .699.398 1.347 1.114 1.824.795.534 1.84.8 2.886.8 1.045 0 2.09-.266 2.886-.8.715-.483 1.113-1.13 1.113-1.835-.006-.699-.398-1.346-1.113-1.824Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default memo(ProfileSvgComponent);
