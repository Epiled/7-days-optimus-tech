import PaginaPadrao from 'components/PaginaPadrao';
import Wrap from 'components/Wrap';
import Menu from 'components/Menu';
import SecaoBase from 'components/SecaoBase';
import Metricas from 'components/Metricas';
import Vagas from 'components/Vagas';
import Depoimentos from 'components/Depoimentos';
import Formulario from 'components/Formulario';

function App() {
  return (
    <div className="App">
      <PaginaPadrao>
        <Wrap>
          <Menu />
          <SecaoBase
            destaque={'Sobre nós'}
            titulo={'Por que somos diferentes?'}
            texto={'Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente importante para elas.'}
            tipoSecao={'principal'}
          />
          <Metricas />
          <SecaoBase
            destaque={'Vagas abertas!'}
            titulo={'Estamos procurando por talentos'}
            texto={'Somos uma equipe 100% remota com pessoas do Brasil inteiro.'}
            imagem={'/assets/imgs/procura-talentos.png'}
          >
            <Vagas />
          </SecaoBase>
          <SecaoBase
            destaque={'Veja o que nossos colaboradores falam sobre nós'}
            titulo={'OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.'}
            tipoSecao={'depoimentos'}
          >
            <Depoimentos />
          </SecaoBase>
        </Wrap>
        <SecaoBase
          titulo={'Acompanhe as nossas oportunidades'}
          texto={'Seja o primeiro a saber quando novas vagas serão abertas!'}
          tipoSecao={'formulario'}
          tag={'aside'}
        >
          <Formulario />
        </SecaoBase>
      </PaginaPadrao>
    </div>
  );
}

export default App;
