import { getEmail } from '../helpers/localStorageSaves';

const getUser = () => {
   const user = getEmail().email.toLowerCase();
   if (!user) {
    localStorage.setItem('user', JSON.stringify({ email: 'teste@xpInc.com' }));
  }
  return user
}

export const user = getUser();