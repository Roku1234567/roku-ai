import { createSigner } from 'fast-jwt';
import { COOKIE_NAME } from 'service/constants';
import { expect, test } from 'vitest';
import { createUserClient, noCookieClient } from './apiClient';
import { DELETE, GET, POST } from './utils';
import { string } from 'zod';

test(GET(noCookieClient.novel), async () => {

  const res = await noCookieClient.novel.$get();

  expect(res).toEqual('Hello');


});



test(POST(noCookieClient.novel), async () => {
  const aozoraUrl = noCookieClient.novel.$path()
  const res = await noCookieClient.novel.$post({ body: { aozoraUrl } });

  expect(typeof res).toEqual('string');
});