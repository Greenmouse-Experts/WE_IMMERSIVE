import { FC } from "react"

interface Props{
    text: string
}
const Tag:FC<Props> = ({text}) => {
  return (
    <div className="flex text-white justify-center bg-primary rounded-full px-5 py-[2px]">
        <p className="text-[10px] unbound fw-600">{text}</p>
    </div>
  )
}

export default Tag