/**
 * Alias Generator for Anonymous Appointment Booking
 * Generates unique pseudonyms from adjective + animal combinations
 */

const adjectives = [
  'Blue', 'Silver', 'Golden', 'Crimson', 'Jade', 'Amber', 'Ivory',
  'Coral', 'Sage', 'Misty', 'Sunny', 'Quiet', 'Brave', 'Gentle',
  'Swift', 'Calm', 'Bright', 'Noble', 'Polar', 'Rustic', 'Velvet',
  'Cosmic', 'Crystal', 'Dawn', 'Dusk', 'Echo', 'Frost', 'Harbor',
  'Luna', 'Meadow', 'Ocean', 'Phoenix', 'Rain', 'Sky', 'Star',
  'Storm', 'Terra', 'Timber', 'Willow', 'Zen'
];

const animals = [
  'Jay', 'Fox', 'Owl', 'Hawk', 'Dove', 'Lark', 'Wren',
  'Deer', 'Wolf', 'Bear', 'Crow', 'Swan', 'Lynx', 'Hare',
  'Finch', 'Robin', 'Crane', 'Eagle', 'Panda', 'Otter',
  'Falcon', 'Sparrow', 'Raven', 'Heron', 'Tiger', 'Dolphin',
  'Coyote', 'Badger', 'Oriole', 'Canary'
];

/**
 * Generate a random alias like "Blue Jay" or "Silver Fox"
 */
const generateAlias = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${adjective} ${animal}`;
};

module.exports = { generateAlias };
