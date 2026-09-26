// Daily note quotes. Every entry is credited to its real author.
// Originally seeded from the old site's daily card (degenius-website DailyQuote.tsx).
// Only the Marcus Aurelius line carried over: the rest of that list was original,
// unattributed writing and has been left out. Expanded with well-known quotes on
// discipline, patience, risk and stoicism.

export type Quote = {
  text: string
  author: string
  source?: string
}

export const quotes: Quote[] = [
  // Stoics
  { text: 'You have power over your mind, not outside events. Realise this, and you will find strength.', author: 'Marcus Aurelius', source: 'Meditations (popular paraphrase)' },
  { text: 'The impediment to action advances action. What stands in the way becomes the way.', author: 'Marcus Aurelius', source: 'Meditations' },
  { text: 'Waste no more time arguing about what a good man should be. Be one.', author: 'Marcus Aurelius', source: 'Meditations' },
  { text: 'If it is not right, do not do it; if it is not true, do not say it.', author: 'Marcus Aurelius', source: 'Meditations' },
  { text: 'Confine yourself to the present.', author: 'Marcus Aurelius', source: 'Meditations' },
  { text: 'You could leave life right now. Let that determine what you do and say and think.', author: 'Marcus Aurelius', source: 'Meditations' },
  { text: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.', author: 'Marcus Aurelius', source: 'Meditations' },
  { text: 'We suffer more often in imagination than in reality.', author: 'Seneca', source: 'Letters from a Stoic' },
  { text: 'It is not that we have a short time to live, but that we waste a lot of it.', author: 'Seneca', source: 'On the Shortness of Life' },
  { text: 'While we are postponing, life speeds by.', author: 'Seneca', source: 'Letters from a Stoic' },
  { text: 'Begin at once to live, and count each separate day as a separate life.', author: 'Seneca', source: 'Letters from a Stoic' },
  { text: 'Difficulties strengthen the mind, as labour does the body.', author: 'Seneca' },
  { text: 'Men are disturbed not by things, but by the views which they take of things.', author: 'Epictetus', source: 'Enchiridion' },
  { text: 'Some things are within our power, while others are not.', author: 'Epictetus', source: 'Enchiridion' },
  { text: 'No man is free who is not master of himself.', author: 'Epictetus' },
  { text: 'First say to yourself what you would be; and then do what you have to do.', author: 'Epictetus', source: 'Discourses' },
  { text: 'How long are you going to wait before you demand the best for yourself?', author: 'Epictetus', source: 'Enchiridion' },

  // Philosophy
  { text: 'My formula for greatness in a human being is amor fati: that one wants nothing to be different, not forward, not backward, not in all eternity.', author: 'Friedrich Nietzsche', source: 'Ecce Homo' },
  { text: 'He who has a why to live can bear almost any how.', author: 'Friedrich Nietzsche', source: 'Twilight of the Idols' },
  { text: "All of humanity's problems stem from man's inability to sit quietly in a room alone.", author: 'Blaise Pascal', source: 'Pensées' },
  { text: 'The unexamined life is not worth living.', author: 'Socrates', source: "Plato's Apology" },
  { text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.', author: 'Will Durant', source: 'The Story of Philosophy' },
  { text: 'The first principle is that you must not fool yourself, and you are the easiest person to fool.', author: 'Richard Feynman' },
  { text: 'Invert, always invert.', author: 'Carl Jacobi' },
  { text: 'Only those who will risk going too far can possibly find out how far one can go.', author: 'T. S. Eliot' },

  // Patience
  { text: 'Adopt the pace of nature: her secret is patience.', author: 'Ralph Waldo Emerson' },
  { text: 'The two most powerful warriors are patience and time.', author: 'Leo Tolstoy', source: 'War and Peace' },
  { text: 'He that can have patience can have what he will.', author: 'Benjamin Franklin', source: "Poor Richard's Almanack" },
  { text: 'The stock market is a device for transferring money from the impatient to the patient.', author: 'Warren Buffett' },
  { text: 'The big money is not in the buying and selling, but in the waiting.', author: 'Charlie Munger' },
  { text: 'It never was my thinking that made the big money for me. It always was my sitting.', author: 'Jesse Livermore', source: 'Reminiscences of a Stock Operator' },
  { text: 'The desire for constant action irrespective of underlying conditions is responsible for many losses in Wall Street.', author: 'Jesse Livermore', source: 'Reminiscences of a Stock Operator' },
  { text: 'I just wait until there is money lying in the corner, and all I have to do is go over there and pick it up.', author: 'Jim Rogers', source: 'Market Wizards' },

  // Risk
  { text: 'Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.', author: 'Warren Buffett' },
  { text: "Risk comes from not knowing what you're doing.", author: 'Warren Buffett' },
  { text: "Only when the tide goes out do you discover who's been swimming naked.", author: 'Warren Buffett' },
  { text: 'The elements of good trading are: cutting losses, cutting losses, and cutting losses.', author: 'Ed Seykota', source: 'Market Wizards' },
  { text: 'Win or lose, everybody gets what they want out of the market.', author: 'Ed Seykota', source: 'Market Wizards' },
  { text: "Don't focus on making money; focus on protecting what you have.", author: 'Paul Tudor Jones' },
  { text: 'Losers average losers.', author: 'Paul Tudor Jones' },
  { text: "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.", author: 'George Soros' },
  { text: 'Risk means more things can happen than will happen.', author: 'Elroy Dimson' },
  { text: 'The essence of investment management is the management of risks, not the management of returns.', author: 'Benjamin Graham' },
  { text: 'The investor\u2019s chief problem, and even his worst enemy, is likely to be himself.', author: 'Benjamin Graham', source: 'The Intelligent Investor' },
  { text: 'Individuals who cannot master their emotions are ill-suited to profit from the investment process.', author: 'Benjamin Graham' },
  { text: 'In investing, what is comfortable is rarely profitable.', author: 'Robert Arnott' },
  { text: "The four most dangerous words in investing are: 'This time it's different.'", author: 'Sir John Templeton' },
  { text: 'Anything can happen.', author: 'Mark Douglas', source: 'Trading in the Zone' },
  { text: 'The goal of a successful trader is to make the best trades. Money is secondary.', author: 'Alexander Elder', source: 'Trading for a Living' },
  { text: 'Take calculated risks. That is quite different from being rash.', author: 'George S. Patton' },

  // Discipline and preparation
  { text: 'We must all suffer one of two things: the pain of discipline or the pain of regret.', author: 'Jim Rohn' },
  { text: 'Discipline is the bridge between goals and accomplishment.', author: 'Jim Rohn' },
  { text: 'Discipline equals freedom.', author: 'Jocko Willink' },
  { text: 'Everyone has a plan until they get punched in the mouth.', author: 'Mike Tyson' },
  { text: 'In preparing for battle I have always found that plans are useless, but planning is indispensable.', author: 'Dwight D. Eisenhower' },
  { text: 'No plan of operations extends with any certainty beyond the first contact with the main hostile force.', author: 'Helmuth von Moltke the Elder' },
  { text: 'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.', author: 'Sun Tzu', source: 'The Art of War' },
  { text: 'If you know the enemy and know yourself, you need not fear the result of a hundred battles.', author: 'Sun Tzu', source: 'The Art of War' },
  { text: 'A man who is master of patience is master of everything else.', author: 'George Savile, Lord Halifax' },
  { text: 'Wisdom is knowing what to do next; virtue is doing it.', author: 'David Starr Jordan' },
]

/** Day of the year in UTC (1-366), so every visitor sees the same quote on a given day. */
export function dayOfYearUTC(date: Date = new Date()): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0)
  const now = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  return Math.floor((now - start) / 86_400_000)
}

export function getQuoteOfTheDay(date: Date = new Date()): Quote {
  return quotes[dayOfYearUTC(date) % quotes.length]
}
