import '../assets/css/projetos-style.css';
import iconTablet01 from '../assets/img/Macbook-Air-app.powerbi.com (1).png';
import iconTablet02 from '../assets/img/Macbook-Air-app.powerbi.com.png';

function Projetos(){
    return(
        <section className='projetos-container'>
            <div className='projetos-box'>
                <div className='projeto-titulo'>Estatísticas Campeonato Brasileiro 2023</div>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiOTlkNTEzZDktYzc4Ny00NmNmLWI1YzUtMzM0MjczMGFiNDYzIiwidCI6ImJmOWJkZTg1LTY4YTQtNGQ2ZS05NTRiLTU0NGE1MGVkYjU4MSJ9" target='_blank'><img className='img-tablet' src={iconTablet01} alt="icon tablet" /></a>
                <div className='box-links'>
                    <a href="https://app.powerbi.com/view?r=eyJrIjoiOTlkNTEzZDktYzc4Ny00NmNmLWI1YzUtMzM0MjczMGFiNDYzIiwidCI6ImJmOWJkZTg1LTY4YTQtNGQ2ZS05NTRiLTU0NGE1MGVkYjU4MSJ9" target='_blank'>Acessar o Relátorio</a>
                </div>
            </div>

            <div className='projetos-box box002'>
                <div className='projeto-titulo'>Relátorio de Vendas - Tech Wave</div>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiZmQ0MjkzMzYtNTkwZS00MWEyLWJmNjktZDNjNzMyOWMxZmY1IiwidCI6ImJmOWJkZTg1LTY4YTQtNGQ2ZS05NTRiLTU0NGE1MGVkYjU4MSJ9" target='_blank'><img className='img-tablet' src={iconTablet02} alt="icon tablet" /></a>
                <div className='box-links'>
                    <a href="https://app.powerbi.com/view?r=eyJrIjoiZmQ0MjkzMzYtNTkwZS00MWEyLWJmNjktZDNjNzMyOWMxZmY1IiwidCI6ImJmOWJkZTg1LTY4YTQtNGQ2ZS05NTRiLTU0NGE1MGVkYjU4MSJ9" target='_blank'>Acessar Relátorio</a>
                </div>
            </div>
        </section>
    )
}

export default Projetos;