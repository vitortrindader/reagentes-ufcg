"use client";

import { usePathname } from "next/navigation";
import Icon, { AvailableIcons } from "./icon.tsx";
interface ButtonProps {
  href: string;
  pathname: string;
  title: string;
  icon: AvailableIcons;
}

function SideBarButton({ href, pathname, title, icon }: ButtonProps) {
  const isSelected = pathname === href;
  const iconType = isSelected ? `${icon}-selected` : `${icon}-default`;
  return (
    <a href={href}>
      <div
        className={`pl-2 h-10 flex justify-between items-center ${
          isSelected ? "bg-azulClaro" : ""
        }`}
      >
        <div className="flex items-center gap-3 ">
          <Icon id={iconType} />

          <span className={isSelected ? "text-verde-piscina" : "text-white"}>
            {title}
          </span>
        </div>

        {isSelected && <div className="h-10 w-1 bg-verde-piscina"></div>}
      </div>
    </a>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className=" bg-azulEscuro min-w-[200px] min-h-screen fixed">
      <div className="h-10 flex items-center justify-end pr-4 mt-4 mb-4">
        <Icon id={"esquerda"} />
      </div>
      <span className="pl-3 text-xs text-azulClaroDemais">MENU</span>
      <SideBarButton
        icon="estoque"
        href="/estoque"
        title="Estoque"
        pathname={pathname}
      />
      <SideBarButton
        icon="historico"
        href="/historico"
        title="Histórico"
        pathname={pathname}
      />
      <SideBarButton
        icon="relatorio"
        href="/relatorio"
        title="Relatório"
        pathname={pathname}
      />
      <SideBarButton
        icon="usuarios"
        href="/usuarios"
        title="Usuários"
        pathname={pathname}
      />
      <SideBarButton
        icon="configuracoes"
        href="/configuracoes"
        title="Configurações"
        pathname={pathname}
      />
    </div>
  );
}
