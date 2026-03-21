const API_BASE_URL = "http://localhost:5000/api/mongo";

export async function login(identifier, password) {

    const payload = identifier.includes("@")
        ? { email: identifier, password }
        : { username: identifier, password };

    const response = await fetch(`${API_BASE_URL}/login-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), 
    });

    return response.json();
}

export async function register(username, email, password) {

    const response = await fetch(`${API_BASE_URL}/create-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });

    return response.json();
}