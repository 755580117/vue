class dialog {
    constructor(title = "放假日", content = "放假我不想学习我想出去玩") {
        this.title = title;
        this.content = content;
        this.init();
    }
    init() {
        this.creareDiv()
    }
    addEvent() {
        let span = document.querySelectorAll('span')[0];
        console.log(span);
        let button = document.querySelectorAll('button')[0];
        console.log(button);
        span.onclick = () => {
            alert(4);
            this.hide();
        }
        button.onclick = () => {
            this.hide();
        }
    }
    creareTitle() {
        let hs = document.createElement('h3');
        let sp = document.createElement('span');
        hs.className = 'hd';
        hs.innerHTML = this.title;
        sp.innerHTML = 'X';
        hs.append(sp);
        return hs;
    }
    creareContent() {
        let ps = document.createElement('p');
        let btn = document.createElement('button');
        ps.className = 'tr';
        ps.innerHTML = this.content;
        btn.innerHTML = '确定';
        ps.append(btn);
        return ps;
    }
    creareDiv() {
        let Dic = document.createElement('div');
        Dic.className = 'box';
        let con = this.creareTitle();
        let tit = this.creareContent();
        Dic.append(con);
        Dic.append(tit);
        document.body.appendChild(Dic);
        this.addEvent();
    }
}
new dialog();