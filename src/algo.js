export const personalities = [
  { name: 'Fanny Pack', img: '/teeth.svg', params: 'asian' },
  { name: 'Rolling Backpack Kid', img: '/teeth.svg', params: 'asian, noodles' },
  { name: 'Commandante', img: '/teeth.svg', params: 'asian' },
  {
    name: 'Morrissey',
    img: '/teeth.svg',
    params: 'popuprestaurants, vietnamese, ukranian, mexican'
  },
  {
    name: 'Minnesotan',
    img: '/minnesota.svg',
    params:
      'rotisserie_chicken, sandwiches, tex-mex, steak, poutineries, potatoes'
  },
  {
    name: 'Super Kawaii',
    img: '/bunny.svg',
    params: 'bubbletea, icecream, shavedice, shavedsnow, candy'
  },
  {
    name: 'Golden Retriever',
    img: '/teeth.svg',
    params: 'rotisserie_chicken, sandwiches, tex-mex, steak, poutineries, potat'
  },
  {
    name: 'Chad Muska',
    img: '/skate.svg',
    params: 'cannabis_clinics, breakfast_brunch, burgers, beergarden'
  },
  { name: 'Anal Retentive', img: '/paper.svg', params: 'asian' },
  { name: 'Jewish Mom', img: '/teeth.svg', params: 'jewish' },
  { name: 'Virgo', img: '/teeth.svg', params: 'acaibowls, tapas' },
  { name: 'Dale Carnegie', img: '/teeth.svg', params: 'asian, tapas' },
  {
    name: 'Artiste',
    img: '/teeth.svg',
    params: 'placentaencapsulation, srilankan, vegan'
  },
  { name: 'Balloon Boy', img: '/teeth.svg', params: 'asian' },
  {
    name: 'Cryptoboi',
    img: '/bitcoin.svg',
    params: 'cannabis_clinics, breakfast_brunch'
  },
  { name: 'Drunk', img: '/teeth.svg', params: 'asian' },
  { name: "You're a nobody!", img: '/teeth.svg', params: 'magicians' }
];

export function getPersonality(props) {
  const code =
    props.subjective + props.objective + props.deductive + props.inductive;
  switch (code) {
    case 'intj':
      return personalities[0];
    case 'intp':
      return personalities[1];
    case 'entj':
      return personalities[2];
    case 'entp':
      return personalities[3];
    case 'infj':
      return personalities[4];
    case 'infp':
      return personalities[5];
    case 'enfj':
      return personalities[6];
    case 'enfp':
      return personalities[7];
    case 'istj':
      return personalities[8];
    case 'isfj':
      return personalities[9];
    case 'estj':
      return personalities[10];
    case 'esfj':
      return personalities[11];
    case 'istp':
      return personalities[12];
    case 'isfp':
      return personalities[13];
    case 'estp':
      return personalities[14];
    case 'esfp':
      return personalities[15];
    default:
      return personalities[16];
  }
}
