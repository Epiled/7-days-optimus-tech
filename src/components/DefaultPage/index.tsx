import stylesTheme from 'styles/Theme.module.scss';

export default function DefaultPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <main className={stylesTheme.container}>{children}</main>;
}
