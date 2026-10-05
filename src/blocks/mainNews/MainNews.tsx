import Link from "next/link"
import styles from './styles.module.scss'
import NewsCard from "@/components/newsCard/NewsCard"

export default function MainNews() {
    const newsData = [
        {
            link: '#',
            img: '/img/news-1@x2.png',
            date: '20/05/22',
            name: 'Semper eu pulvinar eget integer',
            descr: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',
        },
        {
            link: '#',
            img: '/img/news-2@x2.png',
            date: '20/02/22',
            name: 'Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.',
            descr: 'Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.',
        },
        {
            link: '#',
            img: '/img/news-3@x2.png',
            date: '30/12/21',
            name: 'Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.',
            descr: 'Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.',
        },
        {
            link: '#',
            img: '/img/news-4@x2.png',
            date: '29/06/21',
            name: 'Facilisis vitae proin quis',
            descr: 'Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.',
        },
    ]
    return (
        <div className='section news'>
            <div className='container'>
                <div className="section__row">
                    <h2 className="section__heading">
                        Новости
                    </h2>
                    <Link href={'news'} className="section__link">
                        <span>все новости</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <circle cx="15" cy="15" r="14" stroke="#3D348B" strokeWidth="2" />
                            <path d="M14.5 18.705V15.705H7.80998L7.78748 14.1975H14.5V11.205L18.25 14.955L14.5 18.705Z" fill="#3D348B" />
                        </svg>
                    </Link>
                </div>
                <div className={styles.newsLayout}>
                    {newsData.map(item => (
                        <NewsCard
                            key={item.name}
                            link={item.link}
                            img={item.img}
                            date={item.date}
                            name={item.name}
                            descr={item.descr}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}