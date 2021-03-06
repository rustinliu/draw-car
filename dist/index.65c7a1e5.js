let string = `
.container {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 450px;
    background-color: #fff;
    /*
   border: 2px solid #F23BD3;
   border-radius: 100px 0 100px 00px;
*/
}

.car-top {
    position: absolute;
    background-color: #f23bd3;
    height: 180px;
    width: 240px;
    left: 30%;
    top: 15%;
    border-radius: 50%;
    border: 2px solid white;
}

.car-top::before {
    content: "";
    position: absolute;
    height: 40px;
    width: 130px;
    background-color: #6c2feb;
    top: 14%;
    left: 7%;
    border: 2px solid white;
    border-radius: 200px 0px 0px 0px;
}

.car-top::after {
    content: "";
    position: absolute;
    height: 40px;
    width: 55px;
    background-color: #6c2feb;
    top: 14%;
    left: 68%;
    border: 2px solid white;
    border-radius: 0px 200px 0px 0px;
}

.car-body {
    position: absolute;
    background-color: #df3fc1;
    height: 100px;
    width: 430px;
    top: 30%;
    left: 2%;
    border-radius: 50px 60px 20px 50px;
    border: 2px solid white;
}

.front-wheel-front {
    position: absolute;
    background-color: #6c2feb;
    height: 28px;
    width: 82px;
    top: 46%;
    left: 2%;
    border: 2px solid white;
    border-radius: 0px 0px 0px 10px;
}

.front-wheel {
    position: absolute;
    background-color: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 15px solid #6c2feb;
    top: 41%;
    left: 20%;
}

.back-wheel-back {
    position: absolute;
    background-color: #6c2feb;
    height: 28px;
    width: 58px;
    top: 46%;
    left: 86%;
    border: 2px solid white;
    border-radius: 0px 0px 10px 0px;
}
.back-wheel {
    position: absolute;
    background-color: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 15px solid #6c2feb;
    top: 41%;
    left: 70%;
}

.car-bottom {
    position: absolute;
    background-color: #6c2feb;
    height: 25px;
    width: 190px;
    top: 47%;
    left: 30%;
    border: 2px solid white;
}

.car-light {
    position: absolute;
    background-color: #6c2feb;
    height: 30px;
    width: 20px;
    top: 34%;
    left: 6%;
    transform: rotate(45deg);
    border: 2px solid white;
    border-radius: 50%;
}
.car-light::before {
    content: "";
    position: absolute;
    background-color: #f23bd3;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 39%;
    left: 19%;
    border: 1px solid white;
}

.car-light::after {
    content: "";
    position: absolute;
    background-color: white;
    height: 2px;
    width: 2px;
    border-radius: 50%;
    top: 53%;
    left: 34%;
    border: 1px solid white;
}

.car-handle {
    position: absolute;
    background-color: #6c2feb;
    height: 10px;
    width: 25px;
    top: 33%;
    left: 62%;
    border: 2px solid white;
}

.car-handle::after {
    content: "";
    position: absolute;
    background-color: white;
    height: 7px;
    width: 10px;
    left: 29%;
    top: 10%;
}

.car-park-line {
    position: absolute;
    background-color: #6c2feb;
    height: 15px;
    width: 350px;
    top: 56.8%;
    left: 15%;
    z-index: 1;
    box-shadow: 20px 22px 10px 0px #6c2feb;
    border-radius: 10px 0px 10px 0px;
}

.door-line {
    position: absolute;
    background-color: transparent;
    height: 81px;
    width: 150px;
    top: 30.3%;
    left: 37%;
    border: 2px solid white;
    border-radius: 50px 0px 50px 0px;
    box-shadow: 10px 0px 0px 0px white;
}

.front-wheel-design {
    position: absolute;
    background-color: #f23bd3;
    height: 8px;
    width: 8px;
    border-radius: 600%;
    top: 48%;
    left: 27.5%;
    border: 1px solid #f23bd3;
    box-shadow: 0px 0px 5px 0px #f23bd3;
}

.front-wheel-design::after {
    position: absolute;
    content: "";
    background-color: transparent;
    height: 30px;
    width: 30px;
    top: -155%;
    left: -160%;
    border-radius: 50%;
    border: 2px solid #f23bd3;
    box-shadow: 0px 0px 5px 0px #f23bd3;
}

.back-wheel-design {
    position: absolute;
    background-color: #f23bd3;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 48%;
    left: 78%;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px #f23bd3;
}

.back-wheel-design::after {
    position: absolute;
    content: "";
    background-color: transparent;
    height: 30px;
    width: 30px;
    top: -120%;
    left: -125%;
    border-radius: 50%;
    border: 2px solid #f23bd3;
    box-shadow: 0px 0px 5px 0px #f23bd3;
}

.front-wheel-tire-border {
    position: absolute;
    background-color: transparent;
    height: 73.9px;
    width: 73.9px;
    border: 15px solid #6c2feb;
    border-radius: 50%;
    top: 41%;
    left: 20.2%;
    border: 2px solid white;
}

.back-wheel-tire-border {
    position: absolute;
    background-color: transparent;
    height: 73.9px;
    width: 73.9px;
    border: 15px solid #6c2feb;
    border-radius: 50%;
    top: 41%;
    left: 70.2%;
    border: 2px solid white;
}
`;
let n = 0;
let ctstatus = true;
let speed = 5;
textbox.style.height = document.body.clientHeight;
textbox.style.overflowY = "auto";
const ctdown = ()=>{
    setTimeout(()=>{
        //??????????????????????????????????????????????????????????????????
        textbox.scrollTop = textbox.scrollHeight;
        textbox.innerText = string.substr(0, n);
        stylebox.innerHTML = string.substr(0, n);
        n++;
        if (n <= string.length && ctstatus) ctdown();
    }, speed);
};
ctdown();
btnpause.onclick = ()=>{
    ctstatus = !ctstatus;
    ctstatus && ctdown();
};
btnspeed.onclick = ()=>{
    if (speed == 5) {
        speed = 50;
        return;
    }
    if (speed == 50) {
        speed = 100;
        return;
    }
    if (speed == 100) {
        speed = 5;
        return;
    }
};

//# sourceMappingURL=index.65c7a1e5.js.map
