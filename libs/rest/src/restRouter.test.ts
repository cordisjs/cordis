import { buildRestRouter } from './restRouter';
import type { Rest } from './Rest';

const mockedMake = jest.fn();
const rest = { make: mockedMake } as any as Rest;
const router = buildRestRouter(rest);

afterEach(() => {
  mockedMake.mockClear();
});

test('basic routing', async () => {
  await router.users['123'].get();

  expect(mockedMake).toHaveBeenCalledTimes(1);
  expect(mockedMake).toHaveBeenCalledWith({ method: 'get', path: '/users/123' });
});
