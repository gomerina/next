import './style.scss'
import SearchBtn from '@/UI/searchBtn/SearchBtn'
export default function HeaderSearch() {
    return (
        <div className='search'>
            <form action="#">
                <input type="text" />
                <SearchBtn />
            </form>
        </div>

    )
}