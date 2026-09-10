export type MenuItem = {
  label: string;
  href?: string;
  live?: boolean;
};

export type MenuSection = {
  id: string;
  label: string;
  href?: string;
  live?: boolean;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: 'leilao',
    label: 'Leilão',
    href: '/leilao/',
    live: false,
    items: [
      { label: 'Ver tudo em Leilão', href: '/leilao/', live: false },
      { label: 'Leilão de Joias', href: '/leilao/joias/', live: false },
      { label: 'Leilão de Ouro', href: '/leilao/ouro/', live: false },
      { label: 'Leilão de Relógios', href: '/leilao/relogios/', live: false },
      { label: 'Leilão de Diamantes', href: '/leilao/diamantes/', live: false },
      { label: 'Como Funciona o Leilão', href: '/leilao/como-funciona/', live: false },
    ],
  },
  {
    id: 'ouro',
    label: 'Ouro',
    href: '/ouro/',
    live: false,
    items: [
      { label: 'Ver tudo em Ouro', href: '/ouro/', live: false },
      { label: 'Compra de Ouro', href: '/ouro/compra-de-ouro/', live: false },
      { label: 'Avaliação de Ouro', href: '/ouro/avaliacao-de-ouro/', live: false },
      { label: 'Cotação do Ouro', href: '/ouro/cotacao-do-ouro/', live: false },
      { label: 'Calculadora de Ouro', href: '/ouro/calculadora-de-ouro/', live: false },
      { label: 'Ouro 24k', href: '/ouro/ouro-24k/', live: false },
      { label: 'Ouro 18k', href: '/ouro/ouro-18k/', live: false },
      { label: 'Lingotes e Barras', href: '/ouro/lingotes-e-barras/', live: false },
      { label: 'Loja de Ouro Perto de Mim', href: '/ouro/loja-de-ouro-perto-de-mim/', live: false },
    ],
  },
  {
    id: 'joias',
    label: 'Joias',
    href: '/joias/',
    live: false,
    items: [
      { label: 'Ver tudo em Joias', href: '/joias/', live: false },
      { label: 'Compra de Joias', href: '/joias/compra-de-joias/', live: false },
      { label: 'Avaliação de Joias', href: '/joias/avaliacao-de-joias/', live: false },
      { label: 'Calculadora de Joias', href: '/joias/calculadora-de-joias/', live: false },
      { label: 'Joias Antigas', href: '/joias/joias-antigas/', live: false },
      { label: 'Diamantes', href: '/joias/diamantes/', live: false },
      { label: 'Joias para Leilão', href: '/joias/joias-para-leilao/', live: false },
    ],
  },
  {
    id: 'joalheria',
    label: 'Joalheria',
    href: '/joalheria/',
    live: false,
    items: [
      { label: 'Ver toda a Joalheria', href: '/joalheria/', live: false },
      { label: 'Coleções', href: '/joalheria/colecoes/', live: false },
      { label: 'Anéis', href: '/joalheria/aneis/', live: false },
      { label: 'Alianças', href: '/joalheria/aliancas/', live: false },
      { label: 'Colares', href: '/joalheria/colares/', live: false },
      { label: 'Pulseiras', href: '/joalheria/pulseiras/', live: false },
      { label: 'Brincos', href: '/joalheria/brincos/', live: false },
      { label: 'Alta Joalheria', href: '/joalheria/alta-joalheria/', live: false },
      { label: 'Sob Medida', href: '/joalheria/sob-medida/', live: false },
    ],
  },
  {
    id: 'avaliacao',
    label: 'Avaliação',
    href: '/avaliacao/',
    live: false,
    items: [
      { label: 'Ver todas as Avaliações', href: '/avaliacao/', live: false },
      { label: 'Avaliação de Joias', href: '/avaliacao/joias/', live: false },
      { label: 'Avaliação de Ouro', href: '/avaliacao/ouro/', live: false },
      { label: 'Avaliação de Diamantes', href: '/avaliacao/diamantes/', live: false },
      { label: 'Avaliação de Relógios', href: '/avaliacao/relogios/', live: false },
      { label: 'Avaliação Online', href: '/avaliacao/online/', live: false },
      { label: 'Avaliação em Domicílio', href: '/avaliacao/em-domicilio/', live: false },
      { label: 'Avaliação com Hora Marcada', href: '/avaliacao/hora-marcada/', live: false },
    ],
  },
  {
    id: 'relogios',
    label: 'Relógios',
    href: '/relogios/',
    live: false,
    items: [
      { label: 'Ver tudo em Relógios', href: '/relogios/', live: false },
      { label: 'Compra de Relógios', href: '/relogios/compra-de-relogios/', live: false },
      { label: 'Avaliação de Relógios', href: '/relogios/avaliacao-de-relogios/', live: false },
      { label: 'Relógios de Luxo', href: '/relogios/relogios-de-luxo/', live: false },
      { label: 'Relógios para Leilão', href: '/relogios/relogios-para-leilao/', live: false },
    ],
  },
  {
    id: 'servicos',
    label: 'Serviços',
    href: '/servicos/',
    live: false,
    items: [
      { label: 'Ver todos os Serviços', href: '/servicos/', live: false },
      { label: 'Avaliação Online', href: '/servicos/avaliacao-online/', live: false },
      { label: 'Atendimento com Hora Marcada', href: '/servicos/hora-marcada/', live: false },
      { label: 'Avaliação em Domicílio', href: '/servicos/avaliacao-em-domicilio/', live: false },
      { label: 'Atendimento no Vogue Square', href: '/servicos/vogue-square/', live: false },
      { label: 'Segurança e Privacidade', href: '/servicos/seguranca-e-privacidade/', live: false },
    ],
  },
  {
    id: 'localizacao',
    label: 'Localização',
    href: '/localizacao/',
    live: false,
    items: [
      { label: 'Ver Localizações', href: '/localizacao/', live: false },
      { label: 'Barra da Tijuca', href: '/localizacao/barra-da-tijuca/', live: false },
      { label: 'Vogue Square', href: '/localizacao/vogue-square/', live: false },
      { label: 'Rio de Janeiro', href: '/localizacao/rio-de-janeiro/', live: false },
      { label: 'Loja de Ouro Perto de Mim', href: '/ouro/loja-de-ouro-perto-de-mim/', live: false },
    ],
  },
  {
    id: 'madiha-maison',
    label: 'Madiha Maison',
    href: '/madiha-maison/',
    live: false,
    items: [
      { label: 'Sobre a Madiha', href: '/madiha-maison/sobre/', live: false },
      { label: 'Nossa Expertise', href: '/madiha-maison/expertise/', live: false },
      { label: 'Joalheria Madiha', href: '/joalheria/', live: false },
      { label: 'Segurança e Privacidade', href: '/madiha-maison/seguranca-e-privacidade/', live: false },
      { label: 'Vogue Square', href: '/localizacao/vogue-square/', live: false },
      { label: 'Contato', href: '/madiha-maison/contato/', live: false },
    ],
  },
  {
    id: 'news',
    label: 'News',
    href: '/news/',
    live: false,
    items: [
      { label: 'Todas as Notícias', href: '/news/', live: false },
      { label: 'Ouro', href: '/news/ouro/', live: false },
      { label: 'Joias', href: '/news/joias/', live: false },
      { label: 'Joalheria', href: '/news/joalheria/', live: false },
      { label: 'Relógios', href: '/news/relogios/', live: false },
      { label: 'Leilões', href: '/news/leiloes/', live: false },
      { label: 'Mercado', href: '/news/mercado/', live: false },
    ],
  },
];

export const footerMenuItems: MenuItem[] = [
  { label: 'Fale Conosco', href: '/madiha-maison/contato/', live: false },
  { label: 'Vogue Square', href: '/localizacao/vogue-square/', live: false },
  { label: 'Segurança e Privacidade', href: '/madiha-maison/seguranca-e-privacidade/', live: false },
];
