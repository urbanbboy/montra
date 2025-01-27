import { cn } from "@/lib/utils"
import { FC, HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement>

export const Stack: FC<Props> = ({ className, ...props }) => {
    return <div className={cn("flex flex-col gap-2", className)} {...props} />
}