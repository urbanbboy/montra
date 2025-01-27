import { FC, HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement>

export const Box: FC<Props> = (props) => {
    return (
        <div {...props} />
    )
}