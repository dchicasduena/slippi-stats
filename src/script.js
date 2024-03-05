const { SlippiGame } = require("@slippi/slippi-js");

const game = new SlippiGame("test.slp");

// Get game settings – stage, characters, etc
const settings = game.getSettings();
console.log(settings);

// Get computed stats - openings / kill, conversions, etc
const stats = game.getStats();
console.log(stats.actionCounts);