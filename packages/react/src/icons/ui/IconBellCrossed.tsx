import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconBellCrossed: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M18 9.534V11l.002.2c.017.827.147 1.164.55 1.655l.341.405c.732.906 1.067 1.805 1.104 3.427L20 17v2h-5a3 3 0 01-5.995.176L9 19h-.466l2-2H18l-.002-.244c-.015-.842-.11-1.334-.333-1.756h-5.131l2-2 1.78.001c-.17-.42-.267-.889-.3-1.48L18 9.535zm1.793-6.741l1.414 1.414-16.5 16.5-1.414-1.414 16.5-16.5zM13 19h-2a1 1 0 001.993.117L13 19zM12 2c1.776 0 3.371.771 4.47 1.997l-1.418 1.417A4 4 0 008.005 7.8L8 8v3c0 .677-.061 1.205-.196 1.665L4.01 16.453c.063-1.476.4-2.332 1.096-3.193l.235-.279c.486-.564.638-.885.656-1.78L6 8a6 6 0 016-6z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconBellCrossed;
