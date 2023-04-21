const pertama = document.getElementById("pertama");
const kedua = document.getElementById("kedua");
const ketiga = document.getElementById("ketiga");
const keempat = document.getElementById("keempat");
const kelima = document.getElementById("kelima");
const keenam = document.getElementById("keenam");
const ketujuh = document.getElementById("ketujuh");
const present = document.getElementById("present");

const gamau = document.getElementById("gamau");
const boong = document.getElementById("boong");
const no = document.getElementById("no");
const container = document.getElementById("container");


const loading = document.getElementById("loading");

// pertama.style.display = "none";
kedua.style.display = "none";
ketiga.style.display = "none";
keempat.style.display = "none";
kelima.style.display = "none";
keenam.style.display = "none";
ketujuh.style.display = "none";
boong.style.display = "none";
gamau.style.display = "none";
present.style.display = "none";
// container.style.display = "none";

loading.style.display = "none";

function lanjut() {
    loading.style.display = "block";
    container.style.filter = "blur(6px)";
    pertama.style.display = "none";
    setTimeout(() => {
        kedua.style.display = "flex";
        loading.style.display = "none";
        container.style.filter = "none";
    }, 900);
}

function lanjutDua() {
    const ayang = "16 Desember 2003";
    const lahir = document.getElementById("lahir");


    if (lahir.value === ayang) {
        loading.style.display = "block";
        container.style.filter = "blur(6px)";
        kedua.style.display = "none";
        setTimeout(() => {
            ketiga.style.display = "flex";
            container.style.filter = "none";
            loading.style.display = "none";
        }, 900);
    } else {
        loading.style.display = "block";
        container.style.filter = "blur(6px)";
        kedua.style.display = "none";
        setTimeout(() => {
            boong.style.display = "flex";
            container.style.filter = "none";
            loading.style.display = "none";
        }, 900);
    }
}

function lanjutTiga() {
    const ayang = "Adesty Valenina Medinaty";
    const nama = document.getElementById("nama");

    if (nama.value === ayang) {
        loading.style.display = "block";
        container.style.filter = "blur(6px)";
        ketiga.style.display = "none";
        setTimeout(() => {
            keempat.style.display = "flex";
            container.style.filter = "none";
            loading.style.display = "none";
        }, 900);
    } else {
        loading.style.display = "block";
        container.style.filter = "blur(6px)";
        ketiga.style.display = "none";
        setTimeout(() => {
            boong.style.display = "flex";
            container.style.filter = "none";
            loading.style.display = "none";
        }, 900);
    }
}

function maap() {
    loading.style.display = "block";
    container.style.filter = "blur(6px)";
    keempat.style.display = "none";
    setTimeout(() => {
        kelima.style.display = "flex";
        container.style.filter = "none";
        loading.style.display = "none";
    }, 900);

}

function test() {
    loading.style.display = "block";
    container.style.filter = "blur(6px)";
    kelima.style.display = "none";
    setTimeout(() => {
        keenam.style.display = "flex";
        loading.style.display = "none";
        container.style.filter = "none";
    }, 900);
}



function jawab() {
    const ayang = "Boneka yang bernama coki";
    const test = document.getElementById("test");

    if (test.value === ayang) {
        loading.style.display = "block";
        container.style.filter = "blur(6px)";
        keenam.style.display = "none";
        setTimeout(() => {
            ketujuh.style.display = "flex";
            container.style.filter = "none";
            loading.style.display = "none";
        }, 900);
    } else {
        loading.style.display = "block";
        container.style.filter = "blur(6px)";
        keenam.style.display = "none";
        setTimeout(() => {
            boong.style.display = "flex";
            container.style.filter = "none";
            loading.style.display = "none";
        }, 900);
    }
}

function hadiah() {
    loading.style.display = "block";
    container.style.filter = "blur(6px)";
    ketujuh.style.display = "none";
    container.style.display = "none";
    setTimeout(() => {
        present.style.display = "flex";
        loading.style.display = "none";
        container.style.filter = "none";
    }, 900);
}


function liat() {
    window.location.href = "love.html"
}


















function tidak() {
    loading.style.display = "block";
    container.style.filter = "blur(6px)";
    pertama.style.display = "none";
    kedua.style.display = "none";
    ketiga.style.display = "none";
    keempat.style.display = "none";
    boong.style.display = "none";
    setTimeout(() => {
        gamau.style.display = "flex";
        container.style.filter = "none";
        loading.style.display = "none";
    }, 900);
}

function ulang() {
    loading.style.display = "block";
    container.style.filter = "blur(6px)";
    boong.style.display = "none";
    setTimeout(() => {
        kedua.style.display = "flex";
        container.style.filter = "none";
        loading.style.display = "none";
    }, 800);
}

function engga() {
    alert("Dimohon untuk menekan tombol warna hijau terimakasih");
}
