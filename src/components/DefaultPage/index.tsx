import stylesThema from 'styles/Tema.module.scss';

export default function PaginaPadrao({ children }: { children?: React.ReactNode }) {
  return (
    <main className={stylesThema.container}>
      {children}
    </main>
  );
}