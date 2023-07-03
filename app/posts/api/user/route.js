export async function GET(req) {
  const users = [
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    },
    {
      id: 3,
      name: 'c',
    },
  ];
  return new Response(JSON.stringify(users));
}
