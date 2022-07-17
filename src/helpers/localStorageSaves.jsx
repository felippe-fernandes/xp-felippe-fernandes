// Email
export const getEmail = () => JSON.parse(localStorage.getItem('user'));

if (!getEmail) {
  localStorage.setItem('user', JSON.stringify({ email: 'teste@xpInc.com' }));
}

export const saveEmail = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};
//

// Hour
export const getDate = () => JSON.parse(localStorage.getItem('date'));

if (!getDate) {
  localStorage.setItem('date', JSON.stringify({ day: '16 de julho de 2022', hour: '15:18' }));
}

export const saveDate = (day, hour) => {
  localStorage.setItem('date', JSON.stringify({ day, hour }));
};
//

