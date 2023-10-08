export const baseURL = 'https://dummyapi.io/data/v1'
export const headers = {
    'app-id': process.env.NEXT_PUBLIC_DUMMY_API_KEY || '',
    'Content-Type': 'application/json',
}
