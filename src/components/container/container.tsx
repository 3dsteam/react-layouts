import { HTMLAttributes, PropsWithChildren } from "react";
import "./conatiner.css";

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    fullScreen?: boolean;
}

export default function Container(props: Props) {
    // Set HTML attributes
    const htmlProps = { ...props };
    delete htmlProps.fullScreen;

    // Set classes
    const className = props.fullScreen ? "layout-container-screen" : "layout-container";

    return (
        <div {...htmlProps} className={className + " " + props.className}>
            {props.children}
        </div>
    );
}
