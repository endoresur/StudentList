import { FC } from "react"
import * as SC from "./styles.d"

type Props = {
    src: string,
    alt: string,
    height: string,
    width: string
}

const AvatarIcon: FC<Props> = ({src, alt, height, width}) => {
    return (
        <SC.AvatarIconRoot src={src} alt={alt} height={height} width={width}/>
    );
}

export default AvatarIcon