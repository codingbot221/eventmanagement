// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000;

// app.use(cors()); // Enable CORS for all routes

// mongoose.connect('mongodb://localhost:27017/signup', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
// });

// const User = mongoose.model('table', userSchema);


// app.use(bodyParser.json());

// app.post('/signup', async (req, res) => {
    
//   console.log('Received signup request:', req.body);

//   const { username, password, repeatPassword, email } = req.body;

//   try {
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Username or email already exists' });
//     }

//     if (password !== repeatPassword) {
//       return res.status(400).json({ error: 'Passwords do not match' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword, email });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/signin', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'User signed in successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });