import userHealth from '../user-health';

test.each([
  [{ name: '...', health: 90 }, 'healthy'],
  [{ name: '...', health: 45 }, 'wounded'],
  [{ name: '...', health: 14 }, 'critical'],
])(
  'should return helth level for some user with his health',
  (data, expected) => {
    const result = userHealth(data);
    expect(result).toBe(expected);
  },
);
