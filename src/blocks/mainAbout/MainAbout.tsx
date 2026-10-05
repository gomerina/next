import styles from './style.module.scss';

import Link from 'next/link';
import Video from './video/Video';
import { publicAsset } from '@/utils/publicAsset';
export default function MainAbout() {
    const {
        mainAbout,
        mainAboutInner,
        mainAboutText,
        mainAboutMedia,
        mainAboutCaption,
    } = styles;


    return (
        <div className={mainAbout}>
            <div className='container'>
                <h2 className='section__heading'>О компании</h2>
                <div className={mainAboutInner}>
                    <div className={mainAboutText}>
                        <p>
                            Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.
                        </p>
                        <p>
                            Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.
                        </p>
                        <ul>
                            <li>
                                Vivamus tincidunt non lectus odio magna semper odio risus.
                            </li>
                            <li>
                                Vivamus tincidunt non lectus odio magna semper odio risus.
                            </li>
                            <li>
                                Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus.Vivamus tincidunt non lectus odio magna semper odio risus.
                            </li>
                            <li>
                                Vivamus tincidunt non lectus odio magna semper odio risus.
                            </li>
                            <li>
                                Vivamus tincidunt non lectus odio magna semper odio risus.
                            </li>
                        </ul>
                        <p>
                            Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.
                        </p>
                        <ul>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        </ul>
                    </div>
                    <div className={mainAboutMedia}>
                        <Video
                            link={'https://rutube.ru/play/embed/8d6b298576d7aa395b290e4f240af522/'}
                            src={publicAsset('/img/video@x2.png')}
                        />
                        <Link href="request" className={mainAboutCaption}>
                            <div className='small-text'>
                                Запрос ставки и условий погрузочно-разгрузочных работ
                            </div>
                            <h3>
                                Рассчитайте моментально стоимость полных портовых услуг в порту VISMA
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}