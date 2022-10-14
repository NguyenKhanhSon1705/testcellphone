// account admin
var $ = document.querySelector.bind(document);
var $$ = document.querySelector.bind(document)


// handle toast 

function toast({
    title,
    message,
    type
}) {
    const toast = $('#toast');
    const icons = {
        success: 'fa-circle-check',
        error: 'fa-circle-exclamation'
    }
    const icon = icons[type];
    toast.innerHTML = `
        <div class="toast toast--${type}">
            <div class="toast__header color--${type}">
                <i class="fa-solid ${icon}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
        </div>
    `
    setTimeout(function () {
        if ($('.toast')) {
            $('.toast').remove();
        }
    }, 5000);
}
let success = {
    title: 'Thành Công',
    message: 'Đăng Nhập Thành Công',
    type: 'success'
}
let error = {
    title: 'Thất Bại',
    message: 'Tài Khoản Mật Khẩu Không Đúng',
    type: 'error'
}


function loginAdminAccount() {
    const admin = $('.admin');
    const userAdmin = $('.user-admin');
    const account = $('.account').value;
    const password = $('.pass').value;
    console.log(account, password);
    if (account == 1 && password == '1') {
        admin.style.display = 'none'
        userAdmin.style.display = 'block'
        toast(success)
    } else {
        if (account == '' || password == '') {
            toast({
                title: 'Thất Bại',
                message: 'Vui Lòng Nhập Tài Khoản Hoặc Mật Khẩu',
                type: 'error'
            })
        }else{
            toast(error);
        }
    }
}


// js camera user admin 
function camera() {
    confirm('Bạn Có Muốn Truy Cập Camera Không')

}