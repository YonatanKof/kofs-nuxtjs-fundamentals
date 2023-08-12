export const useRandomCounter = () => useState('randomCounter', () => Math.round(Math.random() * 1000));
export const useLoggedInUser = () => useState('loggedInUser', () => false);