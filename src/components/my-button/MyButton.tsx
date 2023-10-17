interface MyButtonProps {
    text: string;
    onClick: () => void;
}

export default function MyButton(props: MyButtonProps) {
    return (
        <button data-testid="my-button" onClick={props.onClick}>
            {props.text}
        </button>
    );
}
