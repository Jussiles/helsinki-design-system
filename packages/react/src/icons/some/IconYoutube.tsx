import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconYoutube: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.071 3a1.93 1.93 0 011.923 1.778l.006.15v14.143a1.93 1.93 0 01-1.778 1.923l-.15.006H4.928a1.93 1.93 0 01-1.923-1.778L3 19.072V4.928a1.93 1.93 0 011.778-1.923L4.928 3h14.143zm-6.605 4.002L11.708 7c-.997.006-4.258.045-5.179.292a1.755 1.755 0 00-1.238 1.24c-.226.848-.278 2.41-.289 3.07v.615c.011.66.063 2.222.29 3.07a1.73 1.73 0 001.237 1.22c.834.224 3.586.277 4.839.29h1.263c1.253-.013 4.004-.066 4.839-.29a1.73 1.73 0 001.237-1.22c.164-.613.236-1.599.268-2.347L19 11.817c-.003-.438-.034-2.322-.292-3.284a1.755 1.755 0 00-1.237-1.24c-.873-.235-3.846-.282-5.004-.291zM10.6 9.799l3.5 2.1-3.5 2.1V9.8z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconYoutube;
