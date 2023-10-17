import { HTMLAttributes, PropsWithChildren } from "react";
import "./footer.css";

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export default function Footer(props: Props) {
    return (
        <div {...props} className={"layout-footer " + props.className}>
            {props.children}
        </div>
    );
}
