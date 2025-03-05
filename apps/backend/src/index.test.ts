import { Hono } from 'hono';
import { testClient } from 'hono/testing';
import { describe, expect, it } from 'vitest';
import app from '.';

describe('routes tests', () => {
	const hono = new Hono().route('/', app);
	const client = testClient(hono);

	it('should return 200', async () => {
		const res = await client.health.$get();
		expect(res.status).toBe(200);
		const json = await res.json();
		expect(json.health).toEqual('ok');
	});
});
