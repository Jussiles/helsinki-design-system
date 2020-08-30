import React, { ReactNode } from 'react';

import styles from './Button.module.css';
import classNames from '../../utils/classNames';

export type ButtonSize = 'default' | 'small';
export type ButtonTheme = 'default' | 'coat' | 'black';
export type ButtonVariant = 'primary' | 'secondary' | 'supplementary' | 'success' | 'danger';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  /**
   * The content of the button
   */
  children: ReactNode;
  /**
   * Additional class names to apply to the button
   */
  className?: string;
  /**
   * Defines the button variant
   *
   * Available options: `'primary' | 'secondary' | 'supplementary' | 'success' | 'danger'`
   */
  variant?: ButtonVariant;
  /**
   * Defines the button theme
   *
   * Available options: `'default' | 'coat' | 'black'`
   */
  theme?: ButtonTheme;
  /**
   * If `true`, the button will be disabled
   */
  disabled?: boolean;
  /**
   * If `true`, the button will take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Element placed on the left side of the button label
   */
  iconLeft?: ReactNode;
  /**
   * Element placed on the right side of the button label
   */
  iconRight?: ReactNode;
  /**
   * The size of the button
   *
   * Available options: `'default' | 'small'`
   */
  size?: ButtonSize;
};

const Button = React.forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      fullWidth,
      size = 'default',
      theme = 'default',
      variant = 'primary',
      iconLeft,
      iconRight,
      ...rest
    }: ButtonProps,
    ref: React.RefObject<HTMLButtonElement>,
  ) => {
    const iconElementLeft = iconLeft ? (
      <div className={styles.icon} aria-hidden="true">
        {iconLeft}
      </div>
    ) : null;

    const iconElementRight = iconRight ? (
      <div className={classNames(styles.icon)} aria-hidden="true">
        {iconRight}
      </div>
    ) : null;

    return (
      <button
        ref={ref}
        disabled={disabled}
        type="button"
        className={classNames(
          styles.button,
          styles[variant],
          styles[`theme-${theme}`],
          styles[`size-${size}`],
          fullWidth ? styles.fullWidth : '',
          className,
        )}
        {...rest}
      >
        {iconElementLeft}
        <span className={styles.label}>{children}</span>
        {iconElementRight}
      </button>
    );
  },
);

export default Button;
