import { hc } from 'hono/client';

import type { AppType } from '@sb-example/backend';

// ローカル環境で開発する際のバックエンドのURL
// Cloudflare Workers上ではService Bindingにより置き換えられる
const baseURL = "http://localhost:8787";

export const createBindingClient = (env: Env) => {
  const { BACKEND } = env;
  return hc<AppType>(baseURL, { fetch: BACKEND.fetch.bind(BACKEND) });
};
