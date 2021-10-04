const getS = selector => document.querySelector(selector);

const firstNameRegExp = /^[a-zA-Zа-яА-Я]{1,20}$/;
const emailRegExp = /^\w+\S*@\w+\.[a-zA-Z]+$/;
const passRegExp = /^\w{8,15}$/;

getS('.inFirst').oninput = function () {
    let testFirst = firstNameRegExp.test(this.value);
    if (this.value != "") {
        getS('.labelFirst').classList.add('labelFirstUP');
        if (testFirst) {
            this.style.border = '1px solid green';
            getS('.inFirst').classList.add('check');
            getS('.inFirst').classList.remove('noCheck');
            getS('.firstError').style.display = 'none';
            allGood()
        }
        else if (testFirst == false) {
            this.style.border = '1px solid red';
            getS('.inFirst').classList.add('noCheck');
            getS('.inFirst').classList.remove('check');
            getS('.firstError').style.display = 'flex';
            allGood()
        }
    }
    else if (this.value == "") {
        getS('.labelFirst').classList.remove('labelFirstUP')
        this.style.border = '1px solid #c9c9c9';
        getS('.inFirst').classList.remove('noCheck');
        getS('.inFirst').classList.remove('check');
        etS('.firstError').style.display = 'none';
        allGood()
    }
}

getS('.inLast').oninput = function () {
    let testLast = firstNameRegExp.test(this.value);
    if (this.value != "") {
        getS('.labelLast').classList.add('labelLastUP');
        if (testLast) {
            this.style.border = '1px solid green';
            getS('.inLast').classList.add('check');
            getS('.inLast').classList.remove('noCheck');
            getS('.lastError').style.display = 'none';
            allGood()
        }
        else if (testLast == false) {
            this.style.border = '1px solid red';
            getS('.inLast').classList.add('noCheck');
            getS('.inLast').classList.remove('check');
            getS('.lastError').style.display = 'flex';
            allGood()
        }
    }
    else if (this.value == "") {
        getS('.labelLast').classList.remove('labelLastUP');
        this.style.border = '1px solid #c9c9c9';
        getS('.inLast').classList.remove('noCheck');
        getS('.inLast').classList.remove('check');
        etS('.lastError').style.display = 'none';
        allGood()
    }
}

getS('.inEmail').oninput = function () {
    let testEmail = emailRegExp.test(this.value);
    console.log();
    if (this.value != "") {
        getS('.labelEmail').classList.add('labelEmailUP')
        if (testEmail) {
            this.style.border = '1px solid green';
            getS('.inEmail').classList.add('check');
            getS('.inEmail').classList.remove('noCheck');
            getS('.emailError').style.display = 'none';
            allGood()
        }
        else if (testEmail == false) {
            this.style.border = '1px solid red';
            getS('.inEmail').classList.add('noCheck');
            getS('.inEmail').classList.remove('check');
            getS('.emailError').style.display = 'flex';
            allGood()
        }
    }
    else if (this.value == "") {
        getS('.labelEmail').classList.remove('labelEmailUP')
        this.style.border = '1px solid #c9c9c9';
        getS('.inEmail').classList.remove('noCheck');
        getS('.inEmail').classList.remove('check');
        etS('.emailError').style.display = 'none';
        allGood()
    }
}

getS('.inPass').oninput = function () {
    let testPass = passRegExp.test(this.value);
    if (this.value != "") {
        getS('.labelPass').classList.add('labelPassUP');
        if (testPass) {
            this.style.border = '1px solid green';
            getS('.inPass').classList.add('check');
            getS('.inPass').classList.remove('noCheck');
            getS('.passError').style.display = 'none';
            allGood()
        }
        else if (testPass == false) {
            this.style.border = '1px solid red';
            getS('.inPass').classList.add('noCheck');
            getS('.inPass').classList.remove('check');
            getS('.passError').style.display = 'flex';
            allGood()
        }
    }
    else if (this.value == "") {
        getS('.labelPass').classList.remove('labelPassUP');
        this.style.border = '1px solid #c9c9c9';
        getS('.inPass').classList.remove('noCheck');
        getS('.inPass').classList.remove('check');
        etS('.passError').style.display = 'none';
        allGood()
    }
}

getS('.checkBox').onclick = function () {
    allGood()
}

function allGood() {
    let testFirst1 = firstNameRegExp.test(getS('.inFirst').value);
    let testLast1 = firstNameRegExp.test(getS('.inLast').value);
    let testEmail1 = emailRegExp.test(getS('.inEmail').value);
    let testPass1 = passRegExp.test(getS('.inPass').value);
    let box = getS('.checkBox');
    if (testFirst1 && testLast1 && testEmail1 && testPass1 && box.checked == true) {
        getS('.inButt').disabled = false;
        getS('.inButt').classList.add('inButt1');
    }
    else {
        getS('.inButt').disabled = true;
        getS('.inButt').classList.remove('inButt1');
    }
}

getS('.inButt').onclick = function () {
    getS('.final').style.display = 'block';
}

getS('.inStart').onclick = function () {
    getS('.inFirst').value = "";
    getS('.inLast').value = "";
    getS('.inEmail').value = "";
    getS('.inPass').value = "";
    getS('.checkBox').checked = false;
    getS('.final').style.display = 'none';

    getS('.labelFirst').classList.remove('labelFirstUP');
    getS('.inFirst').style.border = '1px solid #c9c9c9';
    getS('.inFirst').classList.remove('noCheck');
    getS('.inFirst').classList.remove('check');

    getS('.labelLast').classList.remove('labelLastUP');
    getS('.inLast').style.border = '1px solid #c9c9c9';
    getS('.inLast').classList.remove('noCheck');
    getS('.inLast').classList.remove('check');

    getS('.labelEmail').classList.remove('labelEmailUP')
    getS('.inEmail').style.border = '1px solid #c9c9c9';
    getS('.inEmail').classList.remove('noCheck');
    getS('.inEmail').classList.remove('check');

    getS('.labelPass').classList.remove('labelPassUP');
    getS('.inPass').style.border = '1px solid #c9c9c9';
    getS('.inPass').classList.remove('noCheck');
    getS('.inPass').classList.remove('check');

    allGood()
}
