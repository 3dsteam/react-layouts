import { HTMLAttributes, PropsWithChildren } from "react";
import "./content.css";

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export default function Content(props: Props) {
    return (
        <div {...props} className={"layout-content " + props.className}>
            {props.children}
        </div>
    );
}
