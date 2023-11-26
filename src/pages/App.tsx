import PaginaPadrao from 'components/PaginaPadrao';
import Menu from '../components/Menu';
import SecaoBase from 'components/SecaoBase';

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
      </PaginaPadrao>
    </div>
  );
}

export default App;
