const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../src/app/models/User');
const Products = require("./app/models/products")
const db = require('../src/config/db/index');
const bodyparser = require("body-parser");
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to DB
db.connect();
app.use(cors({ origin: true }))

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Đăng ký tài khoản
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Kiểm tra xem email đã tồn tại trong db hay chưa
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).send('User already exists');
        }

        // Mã hóa mật khẩu trước khi lưu vào db
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo user mới và lưu vào db
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Đăng nhập tài khoản
app.post('/login', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Tìm kiếm user trong db theo username
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }

        // So sánh mật khẩu đã mã hóa từ client và từ db
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send('Invalid username or password');
        }
        // Tạo token
        const token = jwt.sign({ id: user._id }, 'secret-key', { expiresIn: '1h' });

        res.status(200).json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// đăng xuất
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).send({ message: 'Đăng xuất thành công.' });
});


// Lấy thông tin người dùng
app.get('/me', (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'secret-key');
        const userId = decodedToken.id;
        User.findById(userId, (err, user) => {
            if (err) {
                return res.status(500).send('Server error');
            }
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).json({ username: user.username });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get("/products", async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products)
    } catch (e) {
        console.log(e)
        res.status(500).send('Error from server')
    }
})

app.post("/add-products", async (req, res) => {
    try {
        const { nameCake, price, description, quantity, thumbnail } = req.body
        const newProduct = new Products({ nameCake, price, description, quantity, thumbnail });
        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

const port = 8005;

// Khởi động server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});