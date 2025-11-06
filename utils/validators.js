const validateRegistration = ({ username, email, password }) => {
const errors = [];
if (!username || username.length < 3) errors.push('Username must be at least 3 characters');
if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Invalid email');
if (!password || password.length < 6) errors.push('Password must be at least 6 characters');
return errors;
};


module.exports = { validateRegistration };