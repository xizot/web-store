import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const vnTranslation = {
	title: 'Family Store - Mua sắm online dễ dàng hơn',
	homepage: {
		bannerTitle: 'Mua sắm ngay tại nhà',
		bannerDescription:
			'Vì sức khỏe cộng đồng "Kết nối không khoảng cách". An tâm mua sắm tại nhà cùng Family Store',
		topTitle1: 'Bán chạy nhất tuần',
		topTitle2: 'Bán chạy nhất tháng',
		topTitle3: 'Sản phẩm giá tốt'
	},
	loginpage: {
		title: 'Family Store - Đăng Nhập',
		formTitle: 'Đăng Nhập',
		email: 'Email',
		emailInValid: 'Địa chỉ email không hợp lệ',
		password: 'Mật khẩu',
		passwordInValid: 'Mật khẩu không hợp lệ',
		buttonLogin: 'Đăng nhập',
		newMember: 'Chưa có tài khoản?',
		forgotPassword: 'Quên mật khẩu?',
		signUp: 'Đăng kí'
	},
	registerpage: {
		title: 'Family Store - Đăng Ký',
		formTitle: 'Đăng Ký',
		email: 'Email',
		emailInValid: 'Địa chỉ email không hợp lệ',
		address: 'Địa chỉ',
		addressInValid: 'Địa chỉ không hợp lệ.',
		password: 'Mật khẩu',
		passwordInValid: 'Mật khẩu không hợp lệ',
		confirmPassword: 'Nhập lại mật khẩu',
		confirmPasswordInValid: 'Mật khẩu và xác nhận mật khẩu không trùng nhau',
		phonenumberInValid: 'Số điện thoại không hợp lệ',
		buttonRegister: 'Đăng ký',
		haveAccount: 'Bạn đã có tài khoản ?',
		signIn: 'Đăng nhập'
	},
	searchpage: {
		title: "Family Store - Tìm kiếm",
		topContent: "Kết quả tìm kiếm cho",
		sortBy: "Theo giá",
		sortType: "Theo loại",
		optionPrice: "Giá",
		optionAscending: "Tốt",
		optionHigher: "Từ cao",
		optionLower: "Từ thấp",
	},
	searchPlaceHolder: "Tìm kiếm sản phẩm...",
	forgotpasswordpage: {
		title: 'Family Store - Quên mật khẩu',
		formTitle: 'Quên mật khẩu',
		email: 'Email',
		emailInValid: 'Địa chỉ email không hợp lệ',
		buttonExecute: 'Nhận Email khôi phục',
		newMember: 'Chưa có tài khoản?',
		haveAccount: 'Quay lại trang đăng nhập',
		signUp: 'Đăng kí'
	},
	recoverypasswordpage: {
		title: 'Family Store - Khôi phục tài khoản',
		formTitle: 'Khôi phục tài khoản',
		password: 'Mật khẩu',
		passwordInValid: 'Mật khẩu không hợp lệ',
		confirmPassword: 'Nhập lại mật khẩu',
		confirmPasswordInValid: 'Mật khẩu và xác nhận mật khẩu không trùng nhau',
		buttonExecute: 'Xác nhận'
	},
	profilepage: {
		title: 'Tài khoản của tôi',
		tabTitle: {
			1: 'CƠ BẢN',
			2: 'ĐỔI MẬT KHẨU',
			3: 'ẢNH ĐẠI DIỆN'
		},
		fullName: 'Tên đầy đủ',
		email: 'Email',
		address: 'Địa chỉ',
		currentPassword: 'Mật khẩu hiện tại của bạn',
		newPassword: 'Mật khẩu mới',
		confirmNewPassword: 'Nhập lại mật khẩu mới',
		buttonRemove: 'Xóa',
		buttonBrowse: 'Chọn',
		buttonExecute: 'Lưu thay đổi'
	},

	searchPlaceHolder: 'Tìm kiếm sản phẩm...'
};
const enTranslation = {
	title: 'Family Store - Easy to buy online',
	homepage: {
		bannerTitle: 'Stay home & delivered your daily need’s',
		bannerDescription: 'Start your daily shopping with Family Store',
		topTitle1: 'Top items selling last week',
		topTitle2: 'Top items selling last month',
		topTitle3: 'Items on sale'
	},
	loginpage: {
		title: 'Family Store - Login',
		formTitle: 'Login',
		email: 'Email',
		emailInValid: 'Please enter a valid email.',
		password: 'Password',
		passwordInValid: 'Please enter a valid password.',
		buttonLogin: 'Sign in',
		newMember: 'New member?',
		forgotPassword: 'Forgot passsword?',
		signUp: 'Sign up'
	},
	registerpage: {
		title: 'Family Store - Sign up',
		formTitle: 'Sign up',
		email: 'Email',
		emailInValid: 'Please enter a valid email',
		address: 'Address',
		addressInValid: 'Please enter a valid address',
		password: 'Password',
		passwordInValid: 'Please enter a valid password',
		confirmPassword: 'Confirm Password',
		confirmPasswordInValid: 'Password and confirm password does not match',
		phonenumberInValid: 'Please enter a valid phone number',
		buttonRegister: 'Register',
		haveAccount: 'Already have account ?',
		signIn: 'Login'
	},
	forgotpasswordpage: {
		title: 'Family Store - Forgot password',
		formTitle: 'Forgot password',
		email: 'Email',
		emailInValid: 'Please enter a valid email',
		buttonExecute: 'Receive recovery email',
		newMember: 'New member?',
		haveAccount: 'Back to login',
		signUp: 'Sign up'
	},
	searchpage: {
		title: "Family Store - Search",
		topContent: "Search results for",
		sortBy: "Sort by",
		sortType: "Sort type",
		optionPrice: "Price",
		optionAscending: "Ascending",
		optionHigher: "Higher",
		optionLower: "Lower",
	},
	searchPlaceHolder: "What are you looking for?",
	recoverypasswordpage: {
		title: 'Family Store - Restore account',
		formTitle: 'Restore account',
		password: 'New password',
		passwordInValid: 'Please enter a valid password',
		confirmPassword: 'Retype new password',
		confirmPasswordInValid: 'Password and confirm password does not match',
		buttonExecute: 'Confirm'
	},
	profilepage: {
		title: 'My account',
		tabTitle: {
			1: 'BASIC PROFILE',
			2: 'CHANGE PASSWORD',
			3: 'AVATAR'
		},
		fullName: 'Full name',
		email: 'Email',
		address: 'Address',
		currentPassword: 'Your current password',
		newPassword: 'New password',
		confirmNewPassword: 'Retype your new password',
		buttonRemove: 'Remove',
		buttonBrowse: 'Browse',
		buttonExecute: 'Save changes'
	},

	searchPlaceHolder: 'What are you looking for?'
};

const resources = {
	en: {
		translation: enTranslation
	},
	vn: {
		translation: vnTranslation
	}
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
