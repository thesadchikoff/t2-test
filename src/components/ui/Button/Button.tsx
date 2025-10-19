import {type ButtonHTMLAttributes, forwardRef, type PropsWithChildren} from "react";
import styles from './Button.module.css'
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, className, ...props}, ref) => {
    return (
        <button {...props} ref={ref} className={classNames(styles.button, className)}>
            {children}
        </button>
    );
});
