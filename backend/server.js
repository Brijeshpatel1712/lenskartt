const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, 'users.json');
const CATEGORIES_FILE = path.join(__dirname, 'categories.json');
const NAV_LINKS_FILE = path.join(__dirname, 'navLinks.json');

// Initialize files if not exist
const initFile = (filePath, defaultData) => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
    }
};

initFile(USERS_FILE, []);
// Files are already created by the tool, but this is good for robustness

// Helpers
const readFile = (filePath) => JSON.parse(fs.readFileSync(filePath));
const writeFile = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

app.get('/', (req, res) => {
    res.send('Lenskart Clone API');
});

app.get('/api/categories', (req, res) => {
    try {
        const categories = readFile(CATEGORIES_FILE);
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error reading categories" });
    }
});

app.get('/api/nav', (req, res) => {
    try {
        const navLinks = readFile(NAV_LINKS_FILE);
        res.json(navLinks);
    } catch (error) {
        res.status(500).json({ message: "Error reading nav links" });
    }
});

// Auth Endpoints
app.post('/api/signup', (req, res) => {
    const { firstName, lastName, mobile, email, password } = req.body;
    const users = readFile(USERS_FILE);

    if (users.find(u => u.email === email || u.mobile === mobile)) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = { id: Date.now(), firstName, lastName, mobile, email, password };
    users.push(newUser);
    writeFile(USERS_FILE, users);

    res.status(201).json({ message: "Account created successfully", user: newUser });
});

app.post('/api/signin', (req, res) => {
    const { identifier, password } = req.body; // identifier can be email or mobile
    const users = readFile(USERS_FILE);

    const user = users.find(u => (u.email === identifier || u.mobile === identifier) && u.password === password);

    if (user) {
        res.json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
