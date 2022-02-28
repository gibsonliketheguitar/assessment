type TVariant = "default" | "text" | "outlined";

export interface IButton {
    disabled?: boolean,
    width?: string,
    height?: string,
    title: string,
    style?: string,
    variant?: TVariant,
    onClick?: () => void
}

enum Btn {
    default = "btn-default",
    outlined = "btn-outlined",
    text = "btn-text",
}


export default function Button({
    variant = "default",
    disabled = false,
    title,
    height,
    style,
    width,
    onClick,
}: IButton) {

    function handleOnClick() {
        if (disabled) return
        onClick?.()
    }

    return (
        <div className={`btn-base ${Btn[variant]} ${height} ${width} ${style}`} onClick={() => handleOnClick()}>
            <span className="">{title}</span>
        </div >
    );
}