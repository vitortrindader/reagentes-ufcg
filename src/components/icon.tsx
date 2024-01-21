export type AvailableIcons =
  | "estoque-selected"
  | "estoque-default"
  | "historico-selected"
  | "historico-default"
  | "relatorio-selected"
  | "relatorio-default"
  | "configuracoes-selected"
  | "configuracoes-default"
  | "esquerda"
  | "usuarios-selected"
  | "usuarios-default"
  | "hamburguer"
  | "x";

const Icon = ({
  id,
  strokeWidth = 2,
  size = 20,
  width,
  height,
  ...otherProps
}: Props) => (
  <svg
    {...otherProps}
    width={width ?? size}
    height={height ?? size}
    strokeWidth={strokeWidth}
  >
    <use href={`/sprites.svg#${id}`} />
  </svg>
);

export default Icon;
