import MorizonError from "../Errors/MorizonError";

export default async function ({ userName, password }) {

    const response = await fetch('/api/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
    });
    const data = await response.json()

    if (response.status === 200) {
        return data
    }
    throw new MorizonError(data.error || 'Something went wrong!')
}