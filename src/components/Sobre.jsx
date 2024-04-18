import '../assets/css/sobre-style.css';
import Title from './Title';
import iconLinkedin from '../assets/img/sobre-linkedin.png'
import iconGithub from '../assets/img/sobre-github.png'
import iconCurriculo from '../assets/img/sobre-currículo.png'
import myImg from '../assets/img/my-img.jpeg'
import doc from '../assets/doc/cv-analista.pdf';

function Sobre (){
    return(
        <section className='sobre-container'>
            <Title title="Sobre Mim"/>
            <div className='sobre-box'>
                <div className='sobre-subbox01'>
                    <h3>Escrito Por</h3>
                    <h2>Paulo Henrique</h2>
                    <div className='sobre-desc'>
                        <p>
                        Me chamo Paulo Henrique e atualmente resido na cidade de São Paulo. Em 2019, me formei em <strong>Análise e Desenvolvimento de Sistemas</strong>. Durante o último ano da minha formação acadêmica, iniciei minha trajetória no setor administrativo, onde permaneci por três anos e meio.
                        No entanto, minha verdadeira paixão sempre foi atuar na área de tecnologia. Por isso, em 2023, decidi focar meus estudos e minha carreira em Análise de Dados. Possuo habilidades em linguagens como <strong>Python e SQL</strong>, além de experiência com ferramentas de análise de dados e visualização, como <strong>Pandas, Matplotlib e Power BI.</strong><br/>
                        Atualmente, trabalho em projetos pessoais, realizando análises de dados para diversos investimentos. Isso me ajuda muito, auxiliando em tomadas de decisões estratégicas com base em insights obtidos a partir de dados. 
                        Estou sempre em busca de novas oportunidades para aplicar minhas habilidades analíticas em projetos desafiadores.
                        É possível me encontrar no <strong>GitHub</strong>, onde compartilho projetos pessoais de análise de dados, ou no <strong>LinkedIn</strong>, onde participo de discussões relacionadas a essa área.
                        </p>
                        <div className='sobre-box-icon'>
                            <a href="https://www.linkedin.com/in/paulohenrique--/" target='_blank'><img src={iconLinkedin} alt="icon01" /></a>
                            <a href="https://github.com/HenriqueCorsi" target='_blank'><img src={iconGithub} alt="icon02" /></a>
                            <a href={doc} download="cv-analista.pdf" target='_blank'><img src={iconCurriculo} alt="icon03" /></a>
                        </div>
                    </div>
                </div>
                <div className='sobre-subbox02'> 
                    <img src={myImg} alt="img-my" />
                </div>
            </div>
        </section>
    )
}

export default Sobre;