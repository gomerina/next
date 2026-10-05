"use client"
import Link from "next/link"
import Image from "next/image"
import styles from './style.module.scss';
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from 'react';
import PlayBtn from '@/UI/playBtn/PlayBtn';
export default function Video({ ...props }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
        });

        return () => {
            Fancybox.unbind("[data-fancybox]");
        };
    }, []);
    return (
        <Link href={props.link} data-fancybox data-type="iframe" className={styles.mainAboutVideo}>
            <Image
                src={props.src}
                alt=''
                fill
                loading="eager"
                sizes="52.06rem"
                style={{ objectFit: 'cover' }} />
            <PlayBtn></PlayBtn>
        </Link>
    )
}