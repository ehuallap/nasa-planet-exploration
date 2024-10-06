import './LandingPage.css'
import DDTitle from '../../components/DDTitle';
import DDExoplanet from '../../components/DDExoplanet';
import DDSpaceship from '../../components/DDSpaceShip';

const LandingPage = () => {
    return (
        <div className='container'>
            <div className="hero">
                <div className='hero-content'>
                    <h2 className='slogan'>DESCUBRE MAS ALLA de tus horizontes!</h2>
                    {/* <h1 className='title'>VIAJA Y DESCUBRE NUEVOS EXOPLANETAS</h1> */}
                    <DDTitle text='VIAJA Y DESCUBRE NUEVOS EXOPLANETAS' fontSize='80px' color='white'></DDTitle>
                </div>
                <div className='button-container'>
                    <DDExoplanet />
                    <DDSpaceship />
                </div>
            </div>
            <div className="content" id="exoplanet-history">
                <div className='hero-content'>
                    <h3 className='slogan'>QUE ES UN EXOPLANETA?</h3>
                    <p className='description'>
                        A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.
                    </p>
                    <p className='description'>
                        A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra.
                    </p>
                <DDTitle text="Este es una demostracion del ddtitle" color='red' fontSize='80px' />
                </div>
            </div>
        </div>
    );
}
 
export default LandingPage;