import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconSignin: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M21 2v20H8v-5h2v3h9V4h-9v3H8V2h13zm-8.5 5l5 5-5 5-1.5-1.5 2.5-2.501L2 13v-2l11.499-.001L11 8.5 12.5 7z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconSignin;
