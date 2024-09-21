import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='container'>
            <div className="hero">
                <div className='hero-content'>
                    <h3 className='slogan'>DESCUBRE MAS ALLA</h3>
                    <h1 className='title'>VIAJA Y DESCUBRE NUEVOS EXOPLANETAS</h1>
                    <p className='description'>Descubre +10,000 exoplanetas en diferentes siustemas solares</p>
                </div>
                <div className='button-container'>
                        <button className="button">EMPIEZA TU VIAJE</button>
                </div>
            </div>
            <div className="content">
                <h2>More Content</h2>
                <p>This is where you can add more information as the user scrolls down.</p>
            </div>
        </div>
    );
}
 
export default LandingPage;