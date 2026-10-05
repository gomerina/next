import styles from './style.module.scss';
import Link from 'next/link';
export default function Services() {

    const servicesFiles = [
        {
            link: '/pdf/file.pdf',
            name: 'Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год',
            format: 'pdf',
        },
        {
            link: '/pdf/file.pdf',
            name: 'Условия определения цены договора и тарифы на работы',
            format: 'pdf',
        },
        {
            link: '/pdf/file.pdf',
            name: 'Договор перевалки (типовая форма)',
            format: 'pdf',
        },
    ]
    const servicesCards = [
        {
            name: 'Хранение грузов',
        },
        {
            name: 'Швартовые операции',
        },
        {
            name: 'Складские операции',
        },
        {
            name: 'Агентское обслуживание судов',
        },
        {
            name: 'Буксировка / сопровождение судов',
        },
        {
            name: 'Погрузочно-разгрузочная деятельность',
        },
    ]
    return (
        <div className={`section ${styles.services}`}>
            <div className='container'>
                <div className={styles.servicesInner}>
                    <div className={styles.servicesText}>
                        <h2 className='section__heading'>Услуги</h2>
                        <ul className={styles.servicesList}>
                            {servicesFiles.map(item => (
                                <li className={styles.servicesListItem} key={item.name}>
                                    <Link className={styles.servicesLink} href={item.link} download>
                                        <span className={styles.servicesListName}>
                                            {item.name}
                                        </span>
                                        <span className={`${styles.servicesListFormat} small-text`}>
                                            {item.format}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.servicesLayout}>
                        {servicesCards.map(item => (
                            <Link href={'about'} className={styles.servicesCard} key={item.name}>
                                <div className='small-text'>услуги</div>
                                <h3>
                                    {item.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}