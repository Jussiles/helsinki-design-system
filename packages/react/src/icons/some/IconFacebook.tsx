import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconFacebook: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2h-3.356v-7.12h2.435l.35-2.716h-2.785V9.43c0-.788.217-1.322 1.346-1.322h1.439V5.68l-.35-.036-.341-.025c-.38-.026-.873-.048-1.407-.048-2.073 0-3.495 1.266-3.495 3.592v2.005h-2.443v2.716h2.447L12.839 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconFacebook;
