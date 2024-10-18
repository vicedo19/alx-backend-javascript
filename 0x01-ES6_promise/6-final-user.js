import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const results = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ]);

    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason)
    }));
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    return [];
  }
}
