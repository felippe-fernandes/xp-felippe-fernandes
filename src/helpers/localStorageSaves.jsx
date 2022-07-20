// Email
if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({ email: 'teste@xpInc.com' }));
}

export const getEmail = () => JSON.parse(localStorage.getItem('user'));

export const saveEmail = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};
//

// Date

if (!JSON.parse(localStorage.getItem('date'))) {
  localStorage.setItem('date', JSON.stringify({ day: '16 de julho de 2022', hour: '15:18' }));
}

export const getDate = () => JSON.parse(localStorage.getItem('date'));

export const saveDate = (day, hour) => {
  localStorage.setItem('date', JSON.stringify({ day, hour }));
};
//

