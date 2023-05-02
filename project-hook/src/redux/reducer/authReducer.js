

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const { username, password } = action.payload
            if (username === 'admin' && password === 'admin') {
                // Nếu là tài khoản admin
                return {
                    ...state,
                    isLoggedIn: true,
                    user: { username },
                    isAdmin: true,
                    accessToken: 'your-access-token-here'
                }
            }
            else {
                // Nếu là tài khoản user
                return {
                    ...state,
                    isLoggedIn: true,
                    user: { username },
                    isAdmin: false,
                    accessToken: 'your-access-token-here'
                }
            }
        case 'LOGOUT':
            // Xử lý đăng xuất
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                isAdmin: false,
                accessToken: null
            }
        case 'REGISTER':
            // Xử lý đăng ký
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}
