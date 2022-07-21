import { getEmail } from '../helpers/localStorageSaves';

const getUser = () => {
   const user = getEmail().email.toLowerCase();
   if (!user) {
    localStorage.setItem('user', JSON.stringify({ email: 'teste@xpInc.com' }));
  }
}

export const userInfos = {user: getUser(), balance: 722.98};