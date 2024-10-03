import './LandingPage.css'
import DDTitle from '../../components/DDTitle';
import { Link } from 'react-router-dom';
import DDButton from '../../components/DDButton';

const LandingPage = () => {

    const consoles = ()=>{
        console.log("Este es de prueba")
    } 
    return (
        <div className='container'>
            <div className="hero">
                <div className='hero-content'>
                    <h2 className='slogan'>DESCUBRE MAS ALLA de tus horizontes</h2>
                    {/* <h1 className='title'>VIAJA Y DESCUBRE NUEVOS EXOPLANETAS</h1> */}
                    <DDTitle text='VIAJA Y DESCUBRE NUEVOS EXOPLANETAS' fontSize='80px' color='white'></DDTitle>
                    <p className='description'>Descubre +10,000 exoplanetas en diferentes siustemas solares</p>
                </div>
                <div className='button-container'>
                    <DDButton href="mision-description" onClick={consoles} className="button">EMPIEZA TU VIAJE</DDButton>
                </div>
            </div>  
            <div className="content">
                <div className='hero-content'>
                    <h3 className='slogan'>QUE ES UN EXOPLANETA?</h3>
                    <p className='description'>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</p>
                    <p className='description'>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. </p>
                <DDTitle text="Este es una demostracion del ddtitle" color='red' fontSize='80px' />
                </div>
            </div>

            <div className='important-facts'>
                <div className='hero-content'>
                    <h1>HOLA</h1>
                </div>
            </div>
        </div>
    );
}
 
export default LandingPage;