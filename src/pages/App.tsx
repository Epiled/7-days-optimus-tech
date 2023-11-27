import PaginaPadrao from 'components/PaginaPadrao';
import Menu from '../components/Menu';
import SecaoBase from 'components/SecaoBase';
import Metricas from 'components/Metricas';

function App() {
  return (
    <div className="App">
      <PaginaPadrao>
        <Menu />
        <SecaoBase
          destaque={'Sobre nós'}
          titulo={'Por que somos diferentes?'}
          texto={'Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente importante para elas.'}
          principal={true}
        />
        <Metricas />
        <SecaoBase
          destaque={'Vagas abertas!'}
          titulo={'Estamos procurando por talentos'}
          texto={'Somos uma equipe 100% remota com pessoas do Brasil inteiro.'}
          imagem={'/assets/imgs/procura-talentos.png'}
        >
          <h1>Oi</h1>
        </SecaoBase>
      </PaginaPadrao>
    </div>
  );
}

export default App;
