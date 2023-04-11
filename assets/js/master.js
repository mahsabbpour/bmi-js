let name = document.querySelector('.name')
let weight = document.querySelector('.weight')
let height = document.querySelector('.height')

let _calc = document.querySelector('.calc')
let _des = document.querySelector('.description')
var _answer = document.querySelector('.answer');
let _img = document.querySelector('#img');


_calc.addEventListener('click', function () {
    _height = height.value;
    _weight = weight.value;
    _name = name.value;
    if (
        _height == '' || _weight == '' || _name == ''
    ) {
        alert('Please enter your information completely')
        _img.setAttribute('src' , 'assets/img/think.jpg')
    } else if (_calc.innerHTML == 'Reset') {
        height.value = '';
        weight.value = '';
        name.value = '';
        _answer.innerHTML = '';
        _des.innerHTML = '';
        _calc.innerHTML = 'Calculate';
        _img.setAttribute('src' , 'assets/img/think.jpg')

    }
    else {
        _bmi = Math.floor(_weight/(_height ** 2))
        _answer.innerHTML = _bmi
        if (_bmi < 18.5) {
            _des.innerHTML = _name + ', You are underweight'
            _answer.style.color = ' rgb(174, 33, 78)'
        _img.setAttribute('src' , 'assets/img/underW.jpg')

        } else if ((_bmi > 18.5) && (_bmi <= 24.9)) {
            _des.innerHTML = _name + ", You have a normal weight";
            _answer.style.color = ' rgb(174, 33, 78)'
        _img.setAttribute('src' , 'assets/img/normal.jpg')

        } else if ((_bmi >= 25) && (_bmi <= 29.9)) {
            _des.innerHTML = _name + " ,You are overweight";
            _answer.style.color = ' rgb(174, 33, 78)'
        _img.setAttribute('src' , 'assets/img/overW.jpg')

        } else {
            _des.innerHTML = _name + ", You are too fat";
            _answer.style.color = ' rgb(174, 33, 78)'
        _img.setAttribute('src' , 'assets/img/fat.jpg')

        }
        _calc.innerHTML = 'Reset'




    }


})
