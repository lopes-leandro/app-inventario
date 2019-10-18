import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduto {
  id: number;
  nome: string;
  ativo: boolean;
  dataExpiracao: string;
  descricao: string;
  tipo: string;
  recurso?: string[];
}

function gerandoId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: IProduto[] = [
    {
      id: gerandoId(),
      nome: 'Lexmark CS417dn',
      ativo: true,
      descricao: `A impressora colorida CS417dn da Lexmark oferece confiança, segurança, 
      impressão a partir de dispositivos móveis ou por conexão sem fio opcional, 
      impressão em frente e verso e rede, e imprime até 32 [30] páginas por minuto.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Impressora Laser a cores'
    },
    {
      id: gerandoId(),
      nome: 'Cabo USB (2 Metros)',
      ativo: true,
      descricao: 'This is a 2 meter (6.5 feet) USB cable for use with a USB printer interface.',
      dataExpiracao: '1/15/2020',
      tipo: 'Connectivity'
    },
    {
      id: gerandoId(),
      nome: 'Kit de servidor de impressão sem fio MarkNet N8352 802.11b/g/n',
      ativo: true,
      descricao: `O servidor de impressão MarkNet N8352 fornece recursos de impressão sem fio 802.11b/g/n para as,
      impressoras Lexmark usando um conector RP-SMA com antena. Usando a faixa de 2,4 GHz, esse servidor de
      impressão sem fio se conecta a qualquer rede sem fio para oferecer recursos de impressão em rede
      completos. Oferecendo uma velocidade de conexão de até 72 Mbps (1x1 SISO 802.11b/g/n) e com
      autenticação 802.1x e IPSec, o MarkNet N8352 pode até operar em um ambiente seguro.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Connectivity'
    },
    {
      id: gerandoId(),
      nome: 'Servidor de impressão MarkNet™ N7020e Gigabit Ethernet',
      ativo: true,
      descricao: `Um servidor de impressão externo para ligar um máximo de 4 impressoras ou multifuncionais à maioria das
      redes principais utilizando Gigabit Ethernet com um conector RJ-45. Suporta os serviços de aplicações para
      TCP/IP (IPv4 e IPV6) e é compatível com os sistemas operativos mais conhecidos incluindo Novell NetWare,
      Microsoft Windows (98, Me, NT, 2000, 2003 e XP), bem como UNIX, Linux e Apple Mac OS.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Connectivity'
    },
    {
      id: gerandoId(),
      nome: 'Lexmark C3224dw',
      ativo: true,
      descricao: `Com impressão colorida de até 22 páginas por minuto*, tamanho compacto e Wi-Fi padrão, a C3224dw da
      Lexmark pode oferecer suporte a grupos de trabalho pequenos.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Impressora Laser a cores'
    },
    {
      id: gerandoId(),
      nome: 'Lexmark MC3224adwe',
      ativo: true,
      descricao: `A MC3224adwe da Lexmark oferece impressão colorida de até 22 páginas por minuto*, além de 
      digitalização automática, cópia e fax, tudo em um pacote compacto equipado com uma tela sensível ao
      toque.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Impressora Laser a cores'
    },
    {
      id: gerandoId(),
      nome: 'Lexmark MC2535adwe',
      ativo: true,
      descricao: `A Lexmark MC2535adwe multifuncional imprime até 35 [33] páginas por minuto* coloridas com uma tela de 
      toque colorida de 4,3 pol. [10,9 cm].`,
      dataExpiracao: '1/15/2020',
      tipo: 'Impressora Laser a cores'
    },
    {
      id: gerandoId(),
      nome: 'Lexmark CX417de',
      ativo: true,
      descricao: `A MFP colorida CX417de da Lexmark oferece confiança, segurança, impressão a partir de dispositivos
      móveis ou por conexão sem fio opcional, impressão frente e verso e rede, e imprime até 32 [30] páginas por minuto.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Impressora Laser a cores'
    },
    {
      id: gerandoId(),
      nome: 'Recipiente de resíduo de impressão da Lexmark 20N0W00',
      ativo: true,
      descricao: `Escolha os Suprimentos originais Lexmark para obter Resultados genuínos da Lexmark.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Supply'
    },
    {
      id: gerandoId(),
      nome: 'Recipiente de resíduo de impressão da Lexmark 20N0W00',
      ativo: true,
      descricao: `Escolha os Suprimentos originais Lexmark para obter Resultados genuínos da Lexmark.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Supply'
    },
    {
      id: gerandoId(),
      nome: 'Cartucho de toner magenta de alto rendimento do programa de devolução para Lexmark C234HM0',
      ativo: true,
      descricao: `Qualidade de imagem consistentemente excepcional.
       Confiabilidade do sistema de longa duração. Sustentabilidade superior.
       Inovador sistema de impressão que não precisa ser agitado.
       Ganhe suprimentos gratuitos com o Lexmark Rewards.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Supply'
    },
    {
      id: gerandoId(),
      nome: 'Cartucho de toner amarelo do programa de devolução para Lexmark C2340Y0',
      ativo: true,
      descricao: `Qualidade de imagem consistentemente excepcional.
       Confiabilidade do sistema de longa duração. Sustentabilidade superior.
       Inovador sistema de impressão que não precisa ser agitado.
       Ganhe suprimentos gratuitos com o Lexmark Rewards.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Supply'
    },
    {
      id: gerandoId(),
      nome: 'Cartucho de toner ciano do programa de devolução para Lexmark C2340C0',
      ativo: true,
      descricao: `Qualidade de imagem consistentemente excepcional.
       Confiabilidade do sistema de longa duração. Sustentabilidade superior.
       Inovador sistema de impressão que não precisa ser agitado.
       Ganhe suprimentos gratuitos com o Lexmark Rewards.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Supply'
    },
    {
      id: gerandoId(),
      nome: 'Cartucho de toner preto do programa de devolução para Lexmark C2340K0',
      ativo: true,
      descricao: `Qualidade de imagem consistentemente excepcional.
       Confiabilidade do sistema de longa duração. Sustentabilidade superior.
       Inovador sistema de impressão que não precisa ser agitado.
       Ganhe suprimentos gratuitos com o Lexmark Rewards.`,
      dataExpiracao: '1/15/2020',
      tipo: 'Supply'
    }
  ];

  produto$ = new BehaviorSubject<IProduto[]>(this.produtos);
}
