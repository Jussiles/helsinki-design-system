import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconKey = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
      <path d="m17.4438 8.04419c1.3807 0 2.5-1.11929 2.5-2.5s-1.1193-2.5-2.5-2.5-2.5 1.11929-2.5 2.5 1.1193 2.5 2.5 2.5zm0 2.00001c2.4853 0 4.5-2.01473 4.5-4.50001s-2.0147-4.5-4.5-4.5-4.5 2.01472-4.5 4.5 2.0147 4.50001 4.5 4.50001z" />
      <path d="m15.8493 8.565-12.14212 12.1421-1.41421-1.4142 12.14213-12.14211z" />
      <path d="m6.53561 23.5298-4.24264-4.2426 1.41421-1.4143 4.24264 4.2427z" />
      <path d="m8.30259 20.7166-3.75-3.65 1.39498-1.4332 3.75 3.6501z" />
    </g>
  </svg>
);
