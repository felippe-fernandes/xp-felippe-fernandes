const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const day = date.toLocaleDateString('pt-BR', options)
export const hour = date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})
