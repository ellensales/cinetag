import { useFavoriteContext } from 'contexts/favorites'
import styles from './Card.module.css'
import iconFavorite from './favorite.png'
import iconUnfavorite from './unfavorite.png'
import { Link } from 'react-router-dom';

export default function Card( { id, title, cover }){
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);

    const icon = !isFavorite ? iconFavorite : iconUnfavorite;

    return(
        <>
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={ cover } alt= { title } className = { styles.cover }/>
            <h2>{ title }</h2>
            </Link>
            <img src={icon}
                alt="Favoritar filme"
                className={ styles.favorite }
                onClick={ () => {
                    addFavorite( { id, title, cover })
                }}/>
        </div>
        </>
    )
}