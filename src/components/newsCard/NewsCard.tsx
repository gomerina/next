import './style.scss';
import Link from 'next/link';
import Image from 'next/image';
import { publicAsset } from '@/utils/publicAsset';

export default function NewsCard({ ...props }) {
    return (
        <Link className='news-card' href={props.link}>
            <div className='news-card__head'>
                <Image src={publicAsset(props.img)} alt=''
                    fill
                    loading="eager"
                    sizes="30.06rem"
                    style={{ objectFit: 'cover' }}>
                </Image>
            </div>
            <div className='news-card__body'>
                <div className='small-text news-card__date'>
                    {props.date}
                </div>
                <h3 className='news-card__name'>
                    {props.name}
                </h3>
                <div className='news-card__descr medium-text'>
                    <p>
                        {props.descr}
                    </p>
                </div>
            </div>
        </Link>
    )
}