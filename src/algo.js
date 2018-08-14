export function getCategories(props) {
  const categories = [];
  categories.push(getOpenness(props));
  categories.push(getSpiciness(props));
  categories.push(getExtraversion(props));
  categories.push(getConscientiousness(props));
  categories.push(getAgreeableness(props));
  categories.push(getNeuroticism(props));
  console.log('search categories', categories);
  return categories.join();
}

export const personalities = [
  'Cryptoboi',
  'Commandante',
  'Ron',
  'Morrissey',
  'Cool for Minnesota',
  'Anal Retentive',
  'Super Kawaii',
  'Chad Muska',
  'Big Whatever'
];

export const photos = [
  '/bitcoin.svg',
  '',
  '/cheese.svg',
  '',
  '/minnesota.svg',
  '/paper.svg',
  '/bunny.svg',
  '/skate.svg',
  '/teeth.svg'
];

export function getPhotos(props) {
  if (props.openness === 0) {
    return photos[0];
  } else if (props.openness === 1) {
    return photos[1];
  } else if (props.openness === 2) {
    return photos[2];
  } else if (props.openness === 3) {
    return photos[3];
  } else if (props.openness === 4) {
    return photos[4];
  } else if (props.openness === 5) {
    return photos[5];
  } else if (props.openness === 6) {
    return photos[6];
  } else if (props.openness === 7) {
    return photos[7];
  } else if (props.openness === 8) {
    return photos[8];
  } else {
    return photos[9];
  }
}

export function getPersonality(props) {
  if (props.openness === 0) {
    return personalities[0];
  } else if (props.openness === 1) {
    return personalities[1];
  } else if (props.openness === 2) {
    return personalities[2];
  } else if (props.openness === 3) {
    return personalities[3];
  } else if (props.openness === 4) {
    return personalities[4];
  } else if (props.openness === 5) {
    return personalities[5];
  } else if (props.openness === 6) {
    return personalities[6];
  } else if (props.openness === 7) {
    return personalities[7];
  } else if (props.openness === 8) {
    return personalities[8];
  } else {
    return personalities[9];
  }
}

function getOpenness(props) {
  if (props.openness > 8) {
    return 'asian';
  } else if (props.openness < 3) {
    return 'spanish';
  } else {
    return 'american';
  }
}

function getSpiciness(props) {
  if (props.spiciness > 8) {
    return 'asian';
  } else if (props.spiciness < 3) {
    return 'spanish';
  } else {
    return 'turkish';
  }
}

function getExtraversion(props) {
  if (props.extraversion > 8) {
    return 'asian';
  } else if (props.extraversion < 3) {
    return 'spanish';
  } else {
    return 'greek';
  }
}

function getConscientiousness(props) {
  if (props.conscientiousness > 8) {
    return 'vegan';
  } else if (props.conscientiousness < 3) {
    return 'thai';
  } else {
    return 'swedish';
  }
}

function getAgreeableness(props) {
  if (props.agreeableness > 8) {
    return 'mexican';
  } else if (props.agreeableness < 3) {
    return 'dominican';
  } else {
    return 'french';
  }
}

function getNeuroticism(props) {
  if (props.neuroticism > 8) {
    return 'asian';
  } else if (props.neuroticism < 3) {
    return 'jewish';
  } else {
    return 'italian';
  }
}
