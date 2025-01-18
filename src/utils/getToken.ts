type AuthResponseType = {
  access_token: string;
};

const Options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    login: 'admin',
    password: 'admin',
  }),
};

const LoginUrl = 'https://hcateringback-dev.unitbeandev.com/api/auth/login';

export const getToken = async (): Promise<string> => {
  try {
    const res = await fetch(LoginUrl, Options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const { access_token }: AuthResponseType = await res.json();
    localStorage.setItem('authToken', access_token);

    return access_token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Login error: ' + error.message);
    } else {
      throw new Error('Login error: an unknown error occurred');
    }
  }
};
