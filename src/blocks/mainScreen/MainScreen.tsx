import styles from './style.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { publicAsset } from '@/utils/publicAsset';

export default function MainScreen() {
    const mainData = [
        {
            name: 'Погрузочно-разгрузочная деятельность',
        },
        {
            name: 'Хранение грузов',
        },
        {
            name: 'Складские операции',
        },
        {
            name: 'Швартовые операции',
        },
    ]
    return (
        <div className={styles.mainScreen}>
            <div className={styles.mainScreenImg}>
                <Image
                    src={publicAsset('/img/ms@x2.png')}
                    alt=''
                    loading="eager"
                    width={1920}
                    height={750}
                />
            </div>
            <div className={styles.mainScreenContent}>
                <div className='container'>
                    <div className={styles.mainScreenInner}>
                        <div className={styles.mainScreenText}>
                            <h1 className={styles.mainScreenHeading}>
                                Тавимский морской порт VISMA
                            </h1>
                            <div className={styles.mainScreenDescr}>
                                <p>
                                    Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.
                                </p>
                            </div>
                            <Link href={'about'} className={styles.mainScreenBtn}>
                                <span>о компании</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <circle cx="15" cy="15" r="14" stroke="white" strokeWidth="2" />
                                    <path d="M14.5001 18.705V15.705H7.8101L7.7876 14.1975H14.5001V11.205L18.2501 14.955L14.5001 18.705Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.mainScreenLayout}>
                            {mainData.map(item => (
                                <Link href="about" className={styles.mainScreenItem} key={item.name}>
                                    <div className={`${styles.mainScreenHead} small-text`}>
                                        услуги
                                    </div>
                                    <div className={`${styles.mainScreenBody} h3`}>
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}