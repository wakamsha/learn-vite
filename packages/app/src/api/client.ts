type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

async function request<REQ extends {}, RES>({
  method,
  path,
  token,
  send,
  // query = {},
  withCredentials,
}: {
  method: Method;
  path: string;
  token?: string;
  send?: REQ;
  query?: any;
  withCredentials: boolean;
}): Promise<RES> {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  // const queryStrings = Object.keys(query).length ? `?${stringify(query)}` : '';
  const url = `https://jsonplaceholder.typicode.com${path}`;
  const res = await fetch(url, {
    headers,
    method,
    credentials: withCredentials ? 'include' : 'omit',
    ...(send ? { body: JSON.stringify(send) } : {}),
  });
  if (!res.ok) {
    console.info('ここでエラー処理をしてください');
    const error = await res.json();
    throw {
      code: res.status,
      ...error,
    };
  }
  return res.json();
}

export async function getUsers() {
  return request({
    method: 'GET',
    path: '/users',
    withCredentials: false,
  });
}
