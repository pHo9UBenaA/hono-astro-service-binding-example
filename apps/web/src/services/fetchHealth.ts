import { createBindingClient } from '../libs/hono.ts';

export async function fetchHealth(env: Env) {
  try {
    const client = createBindingClient(env);
    const response = await client.health.$get();
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
} 
