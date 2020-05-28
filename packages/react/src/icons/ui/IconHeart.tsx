import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconHeart: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.732 11.542c-1.185 1.206-2.282 2.191-3.344 3.144C14.9 16.02 13.492 17.284 12 19c-1.492-1.715-2.9-2.979-4.389-4.315-1.061-.952-2.159-1.937-3.343-3.143A4.43 4.43 0 013 8.418a4.43 4.43 0 011.268-3.124A4.273 4.273 0 017.34 4c3.073 0 4.099 2.71 4.662 3.725C12.566 6.71 13.591 4 16.664 4c1.159 0 2.248.46 3.068 1.294A4.43 4.43 0 0121 8.418a4.43 4.43 0 01-1.268 3.124M16.842 2c-2.91 0-4.376 1.806-4.84 2.518C11.536 3.806 10.071 2 7.16 2h-.004a6.057 6.057 0 00-4.356 1.842A6.317 6.317 0 001 8.29c0 1.682.64 3.261 1.801 4.448 1.266 1.292 2.426 2.336 3.548 3.345 1.581 1.423 3.075 2.767 4.64 4.612.18.211.858 1.103.865 1.112L12 22l.146-.193c.007-.01.684-.9.864-1.112 1.566-1.845 3.06-3.189 4.641-4.612 1.122-1.01 2.282-2.053 3.547-3.345A6.314 6.314 0 0023 8.29c0-1.682-.64-3.261-1.802-4.448A6.054 6.054 0 0016.842 2z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconHeart;
