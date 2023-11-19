import healthLevel from '../userHealth';

// - - - - - - - - - - - - - - - - - - - - - - - - -
// Тест проверяет статус игрока по уровню здоровья
// - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [{ name: '...', health: 51 }, 'healthy'],
  [{ name: '...', health: 50 }, 'wounded'],
  [{ name: '...', health: 15 }, 'wounded'],
  [{ name: '...', health: 14 }, 'critical'],
])(
  'should return health level for some user with his health',
  (data, expected) => {
    const result = healthLevel(data);
    expect(result).toBe(expected);
  },
);
