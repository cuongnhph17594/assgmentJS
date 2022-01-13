const Nav = {
    print() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ </a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">Giới thiệu</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Tin tức</a></li>
                <li><a href="/login" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng nhập</a></li>
                <li><a href="/logup" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng ký</a></li>
                <li><a href="/dashboard" class="block py-3 px-4 text-white hover:bg-blue-500">Quản Trị</a></li>
            </ul>
        </nav>`;
    },
};
export default Nav;