import styles from './Nav.module.css';

function Nav({siteName}){
    return(
        <>
            <nav>
                <section>
                    <h1>{siteName}</h1>
                </section>
                <ul>
                    <li><a href="#">Home</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;