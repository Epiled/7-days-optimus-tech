import itens from 'data/infos.json'; 

export type Itens = typeof itens;

export type Item = typeof itens[0];

export default function Infos() {
  return (
    <section>
      {itens.map((item, index) => (
        <div key={index}>
          {item.titulo}
        </div>
      ))}
    </section>
  );
}