import '../assets/css/projetos-style.css';
import iconTablet01 from '../assets/img/Macbook-Air-app.powerbi.com (1).png';
import iconTablet02 from '../assets/img/Macbook-Air-app.powerbi.com.png';

function Projetos(){
    return(
        <section className='projetos-container'>
            <div className='projetos-box'>
                <div className='projeto-titulo'>Estatísticas Campeonato Brasileiro 2023</div>
                <a href="https://app.powerbi.com/reportEmbed?reportId=2a43f466-1809-45e5-9dd5-dfe56205c263&autoAuth=true&ctid=bf9bde85-68a4-4d6e-954b-544a50edb581" target='_blank'><img className='img-tablet' src={iconTablet01} alt="icon tablet" /></a>
                <div className='box-links'>
                    <a href="https://app.powerbi.com/reportEmbed?reportId=2a43f466-1809-45e5-9dd5-dfe56205c263&autoAuth=true&ctid=bf9bde85-68a4-4d6e-954b-544a50edb581" target='_blank'>Acessar o Relátorio</a>
                </div>
            </div>

            <div className='projetos-box box002'>
                <div className='projeto-titulo'>Relátorio de Vendas - Tech Wave</div>
                <a href="https://app.powerbi.com/reportEmbed?reportId=2fca866b-0946-4c7a-9d77-eb856be4216f&autoAuth=true&ctid=bf9bde85-68a4-4d6e-954b-544a50edb581" target='_blank'><img className='img-tablet' src={iconTablet02} alt="icon tablet" /></a>
                <div className='box-links'>
                    <a href="https://app.powerbi.com/reportEmbed?reportId=2fca866b-0946-4c7a-9d77-eb856be4216f&autoAuth=true&ctid=bf9bde85-68a4-4d6e-954b-544a50edb581" target='_blank'>Acessar Relátorio</a>
                </div>
            </div>
        </section>
    )
}

export default Projetos;