const section1 = document.getElementById("sub_section1");
const section2 = document.getElementById("sub_section2");
const originalHTML1 = section1.innerHTML;
const originalHTML2 = section2.innerHTML;
function moveToSignUpHandler() {
    if (window.innerWidth <= 700) {
        section1.style.transform = 'translateX(0%)';
        section2.style.transform = 'translateX(0%)';
        section2.style.borderTopLeftRadius = '0px';
        section2.style.borderBottomLeftRadius = '10px';
        section2.style.borderBottomRightRadius = '10px';
        section2.style.borderTopRightRadius = '0';
    } else {
        section1.style.transform = 'translateX(100%)';
        section2.style.transform = 'translateX(-100%)';
        section2.style.borderTopLeftRadius = '10px';
        section2.style.borderBottomLeftRadius = '10px';
        section2.style.borderBottomRightRadius = '0';
        section2.style.borderTopRightRadius = '0';
    }
    section2.innerHTML = `
        <div class="sub_section2">
            <div class="hello_text">Welcome Back!</div>
            <div class="dont_have_an_account_text">If you already have an account then</div>
            <button id="change_to_login">LOGIN</button>
        </div>`;

    section1.innerHTML = `
        <div class="heading_name">Create Account</div>
        <div class="login_options">
            <div class="options">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                         fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="..."/>
                    </svg>
                </a>
            </div>
            <div class="options">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                         fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="..."/>
                    </svg>
                </a>
            </div>
            <div class="options">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                         fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="..."/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="or_option sign_up_or_option">or use your email for registration</div>
        <div class="form">
            <form action="">
                <div class="inp">
                    <input type="text" placeholder="Name" name="name" id="name">
                    <span id="name_error"></span>
                    <input type="text" placeholder="Email" name="signup_email" id="email">
                    <span id="email_error"></span>
                    <input type="password" placeholder="Password" name="signup_pwd" id="pwd">
                    <span id="pwd_error"></span>
                </div>
                <input type="submit" value="SIGN UP" onclick="signup_val(event)" name="signup">
            </form>
        </div>`;

    const move_to_login = document.getElementById("change_to_login");
    move_to_login.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
            section1.style.transform = 'translateX(0%)';
            section2.style.transform = 'translateX(0%)';
            section2.style.borderTopLeftRadius = '0px';
            section2.style.borderBottomLeftRadius = '10px';
            section2.style.borderBottomRightRadius = '10px';
            section2.style.borderTopRightRadius = '0';
        } else {
            section1.style.transform = 'translateX(0)';
            section2.style.transform = 'translateX(0)';
            section2.style.borderTopLeftRadius = '0';
            section2.style.borderBottomLeftRadius = '0';
            section2.style.borderBottomRightRadius = '10px';
            section2.style.borderTopRightRadius = '10px';
        }
        section1.innerHTML = originalHTML1;
        section2.innerHTML = originalHTML2;
        const new_move_to_sign_up = document.getElementById("change_to_signup");
        new_move_to_sign_up.addEventListener("click", moveToSignUpHandler);
    });
}

const move_to_sign_up = document.getElementById("change_to_signup");
move_to_sign_up.addEventListener("click", moveToSignUpHandler);

let email_criteria = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

function loginval(event) {
    let login_email_id = document.getElementById("login_email");
    let login_pwd = document.getElementById("login_pwd");
    let login_email_error = document.getElementById("login_email_error");
    let login_pwd_error = document.getElementById("login_pwd_error");
    let forgot_space = document.querySelector(".forgot");
    let flag = true;

    if (login_email_id.value.trim() === "") {
        login_email_error.innerHTML = `*Required`;
        flag = false;
    } else if (!email_criteria.test(login_email_id.value.trim())) {
        flag = false;
        login_email_error.innerHTML = `*Email criteria not satisfied`;
    } else {
        login_email_error.innerHTML = ``;
    }

    if (login_pwd.value.trim() === "") {
        forgot_space.style.margin = '0px';
        login_pwd_error.innerHTML = `*Required`;
        flag = false;
    } else {
        login_pwd_error.innerHTML = ``;
    }

    if (!flag) {
        event.preventDefault();
    } else {
        alert("Login status");
    }
}

function signup_val(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pwd = document.getElementById("pwd").value.trim();
    let name_critera = /^[A-Za-z ]+$/;
    let strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let name_error = document.getElementById("name_error");
    let email_error = document.getElementById("email_error");
    let pwd_error = document.getElementById("pwd_error");

    let flag = true;

    if (name === "") {
        flag = false;
        name_error.innerHTML = `*Required`;
    } else if (!name_critera.test(name)) {
        flag = false;
        name_error.innerHTML = `*Only Letters are allowed`;
    } else {
        name_error.innerHTML = ``;
    }

    if (email === "") {
        flag = false;
        email_error.innerHTML = `*Required`;
    } else if (!email_criteria.test(email)) {
        flag = false;
        email_error.innerHTML = `*email criteria not satisfied`;
    } else {
        email_error.innerHTML = ``;
    }

    if (pwd === "") {
        flag = false;
        pwd_error.innerHTML = `*Required`;
    } else if (pwd.length < 8) {
        flag = false;
        pwd_error.innerHTML = `*min 8 characters`;
    } else if (!strongPwd.test(pwd)) {
        flag = false;
        pwd_error.innerHTML = `*Not strong`;
    } else {
        pwd_error.innerHTML = ``;
    }

    if (!flag) {
        event.preventDefault();
    } else {
        alert("Sign up status");
    }
}
