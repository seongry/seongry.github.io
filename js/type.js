/**
 * 원본 코드 출처 : https://stackoverflow.com/questions/32496536/jquery-erase-text-with-type-effect
 * @type {HTMLElement | null}
 */
var typeWrap = document.getElementById('type-wrap');
var txtList = [
    '꿈꾸는 개발자',
    '햇병아리 웹개발자',
    '목표를 못 찾겠다',
    '자라나라 개발개발'
];
var TextType = function () {
    this.rotate = txtList; //로테이트 될 문자열
    this.element = typeWrap;
    this.loopNum = 0;
    this.period = 2000;
    this.text = '';
    this.type();
    this.isDelete = false;
};

TextType.prototype.type = function () {
    var i = this.loopNum % this.rotate.length;
    var fullText = this.rotate[i];

    //입력/삭제 분기에 따른 타이핑 처리
    if (this.isDelete) {
        this.text = fullText.substring(0, this.text.length - 1);
    } else {
        this.text = fullText.substring(0, this.text.length + 1);
    }

    this.element.innerHTML = '<span class="wrap">' + this.text + '</span>';

    var $this = this;
    var time = 200 - Math.random() * 100;

    //자연스런 삭제 효과를 위한 처리
    if (this.isDelete) {
        time /= 2;
    }

    //모든 입력이 끝난 후 입력/삭제 분기처리
    if(!this.isDelete && this.text === fullText) {
        time = this.period;
        this.isDelete = true;
    }else if(this.isDelete && this.text === '') {
        this.isDelete = false;
        this.loopNum++;
        time = 300;
    }

    setTimeout(function () {
        $this.type();
    },time);
};

window.onload = function () {
    new TextType();
};