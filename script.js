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
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0
                                     2.434-.87 4.492-2.384 5.885h.002C11.978
                                     15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7
                                     7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35
                                     4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492
                                     3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893
                                     2.405 3.301 4.492 3.301 1.078 0 2.004-.276
                                     2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                </a>
            </div>
            <div class="options">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                         fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474
                                     0 16 .513 16 1.146v13.708c0 .633-.526
                                     1.146-1.175 1.146H1.175C.526 16 0 15.487
                                     0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837
                                     0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4
                                     3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908
                                     8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878
                                     1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274
                                     0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678
                                     0 7.225 0 7.225z"/>
                    </svg>
                </a>
            </div>
            <div class="options">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                         fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2
                                     2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0
                                     0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13
                                     2.383-4.708 2.825L15 11.105zm-.034
                                     6.876-5.64-3.471L8 9.583l-1.326-.795-5.64
                                     3.47A1 1 0 0 0 2 13h12a1 1 0 0 0
                                     .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
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
