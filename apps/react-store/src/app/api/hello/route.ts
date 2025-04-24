import environment from '@/environments';

export async function GET(request: Request) {
    console.log(environment)
  return new Response('Hello, from API! ' + environment.ENV_NAME);
}
