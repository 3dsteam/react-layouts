import { HTMLAttributes, PropsWithChildren } from "react";
import "./header.css";

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export default function Header(props: Props) {
    return (
        <div {...props} className={"layout-header " + props.className}>
            {props.children}
        </div>
    );
}
