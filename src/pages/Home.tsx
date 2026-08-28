import DefaultPage from "@/components/DefaultPage";
import Form from "@/components/Form";
import Information from "@/components/Information";
import Jobs from "@/components/Jobs";
import Menu from "@/components/Menu";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import Wrap from "@/components/Wrap";

export const Home = () => {
  return (
    <DefaultPage>
      <Wrap>
        <Menu />
        <Section
          highlight={"Sobre nós"}
          title={"Por que somos diferentes?"}
          text={
            "Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente importante para elas."
          }
          type={"main"}
        />
        <Information />
        <Section
          highlight={"Jobs abertas!"}
          title={"Estamos procurando por talentos"}
          text={"Somos uma equipe 100% remota com pessoas do Brasil inteiro."}
          image={"/assets/img/procura-talentos.png"}
        >
          <Jobs />
        </Section>
        <Section
          highlight={"Veja o que nossos colaboradores falam sobre nós"}
          title={
            "OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível."
          }
          type={"Testimonials"}
        >
          <Testimonials />
        </Section>
      </Wrap>
      <Section
        title={"Acompanhe as nossas oportunidades"}
        text={"Seja o primeiro a saber quando novas Jobs serão abertas!"}
        type={"form"}
        tag={"aside"}
      >
        <Form />
      </Section>
    </DefaultPage>
  );
};
