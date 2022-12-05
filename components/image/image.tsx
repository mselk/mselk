import NextImage from "next/image"
import { useState } from "react";
import styles from '../../styles/Image.module.css'
import StaticImport from "../../types/StaticImport";

interface Props {
    src: StaticImport;
    alt: string;
    width: number;
    height: number;
}

const Image = (props: Props) => {
    const { src, width, height, alt } = props;
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    return <NextImage onClick={handleClick} className={open ? styles.open : styles.image} alt={alt} src={src} width={width} height={height} />
}

export default Image