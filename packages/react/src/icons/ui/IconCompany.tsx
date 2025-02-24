import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconCompany = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
      <path d="m24 24h-24v-2h24z" />
      <path d="m1 .202789 11.5 3.026311v3.7709h-2v-2.22912l-7.5-1.97368v19.2028h-2z" />
      <path d="m12 18h4v4h-4z" />
      <path d="m5 6.99999h18v15.00001h-2v-13.00001h-14v13.00001h-2zm3 3h12v6.00001h-12zm2 2.00001v2h8v-2z" />
    </g>
  </svg>
);
