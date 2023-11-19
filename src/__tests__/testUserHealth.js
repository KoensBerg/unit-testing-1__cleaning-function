import healthLevel from '../userHealth';

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Тест проверяет вербальное определение уровня здоровья
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [{ name: '...', health: 51 }, 'healthy'],
  [{ name: '...', health: 50 }, 'wounded'],
  [{ name: '...', health: 15 }, 'wounded'],
  [{ name: '...', health: 14 }, 'critical'],
])(
  'should return helth level for some user with his health',
  (data, expected) => {
    const result = healthLevel(data);
    expect(result).toBe(expected);
  },
);
