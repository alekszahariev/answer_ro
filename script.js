function checkcase(code){
    let sluchai = "invalid";
    if(code === "152365488"){
      sluchai = "sara";
      sara()
    }
    if(code === "4457684745"){
        sluchai = "maria"
        maria()
    }

    if(code === "7778586954"){
        sluchai = "martin"
        martin()
    }

    if(code === "849571856285"){
        sluchai = "rebeca"
        rebeca()
    }

    if(code === "19992001"){
        sluchai = "ardjikov"
        ardjikov()
    }


    if (sluchai === "invalid"){
        input.value = "Cod greșit!"
        setTimeout(() => {
            input.value = ""
        }, 1000);
    }

}

let input = document.getElementById("code")
let button = document.getElementById("buttonsend")

button.addEventListener("click", function(){
    let code = input.value.toLowerCase().replace(/\s/g, '')
    input.value = ""
    checkcase(code);
})

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    let code = input.value.toLowerCase().replace(/\s/g, '')
    input.value = ""
    checkcase(code);
    }
});

let isithundred =  0;
function maria(){
    document.querySelector(".checkcode").style.display = "none";
    let suspects = [
        "./assets/maria/brother.png",
        "./assets/maria/dreik.png",
        "./assets/maria/gunar.png",
        "./assets/maria/harold.png",
        "./assets/maria/izabel.png",
        "./assets/maria/martin.png",
        "./assets/maria/sisiliq.png"
    ]

    let suspectsdiv = document.querySelector(".suspects")
    suspectsdiv.style.display = "block"

suspects.forEach((link) => {
    const imgElement = document.createElement("img");
    imgElement.src = link;
    suspectsdiv.appendChild(imgElement);
});

let suspects_imgs = document.querySelectorAll(".suspects img")
suspects_imgs.forEach(image =>{
    image.addEventListener("click", function(){
        if(image.src.includes(`martin`)){
            isithundred = 70
        }

        additionalinfo_maria()
    })
})

function additionalinfo_maria(){
    suspectsdiv.style.display="none"

    let uliki = [
        "Разпит с Морело №2",
        "Разпит с Морело №1",
        "Разпит със Сисилия",
        "Разпит с Дрейк",
        "Вестник",
        "Снимки на панаира",
        "Разпит с Мартин",
        "Лист с цитати от библията"
    ]

    let additionalinfo_div = document.querySelector(".additional_info")
    additionalinfo_div.innerHTML = `<h1 style="color: red;">Кои документи го доказват?</h1>`
    additionalinfo_div.style.display = "block";
    var index = 0;
    uliki.forEach(ulika =>{
        const selectinput = document.createElement("div")
        selectinput.className = "option"
        selectinput.innerHTML = ulika
        selectinput.setAttribute("data-id", index);
        index = index+1
        additionalinfo_div.appendChild(selectinput)
    })
    additionalinfo_div.innerHTML += `<button style="margin:auto;display:block;" class="btn btn-success checkanswer">Провери</button>`

    const maxOptions = 3;
const chosenOptions = [];
    let options = document.querySelectorAll(".option")
    options.forEach(option =>{
        option.addEventListener("click", function() {
            if (option.classList.contains("chosen")) {
                option.classList.remove("chosen");
                const optionDataId = option.getAttribute("data-id");
                const index = chosenOptions.indexOf(optionDataId);
                if (index > -1) {
                    chosenOptions.splice(index, 1);
                }
            } else if (chosenOptions.length < maxOptions) {
                option.classList.add("chosen");
                chosenOptions.push(option.getAttribute("data-id"));
            }

            const correctanswers = ["0", "4", "6"];
            let optiondataid = option.getAttribute("data-id");
            if (correctanswers.includes(optiondataid)) {
                if(option.className.includes("chosen")){
                    isithundred = isithundred+10
                    console.log(isithundred)
                }else{
                    isithundred = isithundred-10
                    console.log(isithundred)
                }
            } 
        })

let check_answer_btn = document.querySelector(".checkanswer")
let resultsDiv = document.querySelector(".result")
check_answer_btn.addEventListener("click", function(){
    additionalinfo_div.style.display = "none"
    resultsDiv.style.display = "block"
    let percentage = document.querySelector(".result span")
    percentage.innerHTML = isithundred
    let text = document.querySelector(".result h2")
    if(isithundred>80){
        tryagain_button.style.display = "none"
        text.innerHTML = "Вашият отговор е правилен!"
        document.querySelector(".result p").innerHTML = "Тъй, като цитатите от библията, самата библия и адресната книга са намерени в стаята на Мария това води до мисълта, че тя е правила собствено разследване за убийствата споменати в разпит с Морело №2. Убийствата са извършени от бащата на Мартин и Мария така и от самия Мартин. Мария е разбрала за това и е искала да каже на г-н Дрейк, но той я е отпратил, защото е била твърде зает. Мартин убива Мария за да може тази негова тайна да остане скрита и той да бъде начело на компанията."
    }
    if(isithundred<50){
        text.innerHTML = "Вашият отговор е грешен!"
    }
    if(isithundred>50 && isithundred < 90){
        text.innerHTML = "Близо сте до отговора!"
    }
})


let tryagain_button = document.getElementById("tryagain")
tryagain_button.addEventListener("click", function(){
    resultsDiv.style.display = "none"
    suspectsdiv.style.display = "block"
    isithundred = 0

})


    })
}


}








function sara(){
    document.querySelector(".checkcode").style.display = "none";
    let suspects = [
        "./assets/sara/klaus.png",
        "./assets/sara/lili.png",
        "./assets/sara/maik.png",
        "./assets/sara/margaret.png"
    ]

    let suspectsdiv = document.querySelector(".suspects")
    suspectsdiv.style.display = "block"

suspects.forEach((link) => {
    const imgElement = document.createElement("img");
    imgElement.src = link;
    suspectsdiv.appendChild(imgElement);
});

let suspects_imgs = document.querySelectorAll(".suspects img")
suspects_imgs.forEach(image =>{
    image.addEventListener("click", function(){
        if(image.src.includes(`margaret`)){
            isithundred = 70
        }

        additionalinfo_sara()
    })
})

function additionalinfo_sara(){
    suspectsdiv.style.display="none"

    let uliki = [
        "Разпит с Клаус",
        "Вестник",
        "Разпит с Маргарет",
        "Интернет улика",
        "Аутопсия",
        "Разпит с Лили",
        "Разпит с Майк"
    ]

    let additionalinfo_div = document.querySelector(".additional_info")
    additionalinfo_div.innerHTML = `<h1 style="color: red;">Кои документи го доказват?</h1>`
    additionalinfo_div.style.display = "block";
    var index = 0;
    uliki.forEach(ulika =>{
        const selectinput = document.createElement("div")
        selectinput.className = "option"
        selectinput.innerHTML = ulika
        selectinput.setAttribute("data-id", index);
        index = index+1
        additionalinfo_div.appendChild(selectinput)
    })
    additionalinfo_div.innerHTML += `<button style="margin:auto;display:block;" class="btn btn-success checkanswer">Провери</button>`

    const maxOptions = 3;
const chosenOptions = [];
    let options = document.querySelectorAll(".option")
    options.forEach(option =>{
        option.addEventListener("click", function() {
            if (option.classList.contains("chosen")) {
                option.classList.remove("chosen");
                const optionDataId = option.getAttribute("data-id");
                const index = chosenOptions.indexOf(optionDataId);
                if (index > -1) {
                    chosenOptions.splice(index, 1);
                }
            } else if (chosenOptions.length < maxOptions) {
                option.classList.add("chosen");
                chosenOptions.push(option.getAttribute("data-id"));
            }

            const correctanswers = ["0", "3", "4"];
            let optiondataid = option.getAttribute("data-id");
            if (correctanswers.includes(optiondataid)) {
                if(option.className.includes("chosen")){
                    isithundred = isithundred+10
                    console.log(isithundred)
                }else{
                    isithundred = isithundred-10
                    console.log(isithundred)
                }
            } 
        })

let check_answer_btn = document.querySelector(".checkanswer")
let resultsDiv = document.querySelector(".result")
check_answer_btn.addEventListener("click", function(){
    additionalinfo_div.style.display = "none"
    resultsDiv.style.display = "block"
    let percentage = document.querySelector(".result span")
    percentage.innerHTML = isithundred
    let text = document.querySelector(".result h2")
    if(isithundred>80){
        tryagain_button.style.display = "none"
        text.innerHTML = "Вашият отговор е правилен!"
        document.querySelector(".result p").innerHTML = "Маргарет е искала да отрови Клаус, но не предвижда факта, че Сара може да бъде заедно с Клаус. Така Клаус сипва от виното в което Маргарет е сложила отрова и убива Сара. Клаус прави непредумишлено убийство, а Маргарет е човекът , който слага отровата във виното."
    }
    if(isithundred<50){
        text.innerHTML = "Вашият отговор е грешен!"
    }
    if(isithundred>50 && isithundred < 90){
        text.innerHTML = "Близо сте до отговора!"
    }
})


let tryagain_button = document.getElementById("tryagain")
tryagain_button.addEventListener("click", function(){
    resultsDiv.style.display = "none"
    suspectsdiv.style.display = "block"
    isithundred = 0

})


    })
}
}


function martin(){
    document.querySelector(".checkcode").style.display = "none";

    let form = document.querySelector(".suspects")
    form.style.display = "block";
    form.innerHTML = `
    <h1 style="color: red;">Случай: Мартин</h1>
    <input type="text" id="firstword" placeholder="1ва дума от шифъра" class="form-control my-3">
    <input type="text" id="secondword" placeholder="2ра дума от шифъра" class="form-control my-3">
    <input type="text" id="thirdword" placeholder="3та дума от шифъра" class="form-control my-3">
    <button style="margin:auto;display:block;" class="btn btn-success checkanswer">Напред</button>
    `

    let check_btn = document.querySelector(".checkanswer")
    check_btn.addEventListener("click", function(){
        let firstword = document.getElementById("firstword").value.toLowerCase().replace(/\s/g, '')
        let secondword = document.getElementById("secondword").value.toLowerCase().replace(/\s/g, '')
        let thirdword = document.getElementById("thirdword").value.toLowerCase().replace(/\s/g, '')
        let firstcheck = false
        let secondcheck = false
        let thirdcheck = false


        if(firstword === "канибал"){
            firstcheck = true
        }
        if(secondword.includes("мая") && secondword.includes("марин")){
            secondcheck = true
        }
        if(thirdword==="атацибъд"){
            thirdcheck = true
        }

        if(firstcheck === true && secondcheck === true && thirdcheck === true){
            steptwoMartin()
        }else{
           check_btn.innerHTML = "Грешна дума!"
           check_btn.style.background = "red"
           document.getElementById("firstword").value = ""
           document.getElementById("secondword").value = ""
           document.getElementById("thirdword").value = ""
           setTimeout(() => {
            check_btn.innerHTML = "Напред"
            check_btn.style.background = "#157347"
           }, 1000);
        } 

    })

    function steptwoMartin(){
        form.innerHTML = `<h1 style="color: red;text-align:center;">Кой е убиецът?</h1>`
        let suspects = [
            "./assets/martin/dqdohristo.png",
            "./assets/martin/kmeta.png",
            "./assets/martin/kruchmarq.png",
            "./assets/martin/maikamartin.png",
            "./assets/martin/maq.png",
            "./assets/martin/marin.png",
            "./assets/martin/mesarq.png",
            "./assets/martin/oteca.png",
            "./assets/martin/policaq.png",
            "./assets/martin/rouzi.png",
            "./assets/martin/bebe.png"
        ]
        
        suspects.forEach((image) =>{
        const imgElement = document.createElement("img");
        imgElement.src = image;
        form.appendChild(imgElement);
        })

        let images = document.querySelectorAll(".suspects img")
        images.forEach((image)=>{
            image.addEventListener("click", function(){
                if(image.src.includes("bebe")){
                    correctAnswer()
                }else{
                    alert("Грешен отговор. Опитай отново.");
                }
            })
        })
    }

    function correctAnswer(){
        form.innerHTML = `<h1 style="color:red;">Това е правилен отговор</h1><br> <p style="color:white">
            Както може би сте разбрали това е детето на Мая и Валентин (кмета на селото). <br>
            Когато детето се ражда - Марин, който всъщност не е биологичния баща го оставя в гората, където го 
            открива местен жител. Този жител е канибал. Храни се с различни животни, но също и с човешка плът. 
            Съответно отглежда бебето, което също става канибал. <br>
            <br>
            Когато Мартин отива близо до гората за негов лош късмет попада на вече порасналото бебе. Това са и последните
            моменти на Мартин.
            <br>
            Вие успешно разгадахте този случай!
        </p>`
    }

}




function rebeca(){
    document.querySelector(".checkcode").style.display = "none";
    let form = document.querySelector(".suspects")
    form.style.display = "block";
    form.innerHTML = `
    <h1 style="color: red;">Dosarul: Rebecca</h1>
    <input type="text" id="firstword" placeholder="Parolă pentru telefon" class="form-control my-3">
    <input type="text" id="secondword" placeholder="Parolă pentru portalul școlar" class="form-control my-3">
    <input type="text" id="thirdword" placeholder="Parolă Maloum" class="form-control my-3">
    <button style="margin:auto;display:block;" class="btn btn-success checkanswer">Următorul</button>
    `

    let check_btn = document.querySelector(".checkanswer")
    check_btn.addEventListener("click", function(){
        let firstword = document.getElementById("firstword").value.toLowerCase().replace(/\s/g, '')
        let secondword = document.getElementById("secondword").value.toLowerCase().replace(/\s/g, '')
        let thirdword = document.getElementById("thirdword").value.toLowerCase().replace(/\s/g, '')
        let firstcheck = false
        let secondcheck = false
        let thirdcheck = false


        if(firstword === "18062006"){
            firstcheck = true
        }
        if(secondword === "2518"){
            secondcheck = true
        }
        if(thirdword==="02051978"){
            thirdcheck = true
        }

        if(firstcheck === true && secondcheck === true && thirdcheck === true){
            steptwoRebecca()
        }else{
           check_btn.innerHTML = "Există un cuvânt greșit!"
           check_btn.style.background = "red"
           document.getElementById("firstword").value = ""
           document.getElementById("secondword").value = ""
           document.getElementById("thirdword").value = ""
           setTimeout(() => {
            check_btn.innerHTML = "Următorul"
            check_btn.style.background = "#157347"
           }, 1000);
        } 

    })


    function steptwoRebecca(){
        form.innerHTML = `<h1 style="color: red;text-align:center;">Кой е убиецът?</h1>`
        let suspects = [
            "./assets/rebecca/1.jpg",
            "./assets/rebecca/2.jpg",
            "./assets/rebecca/3.jpg",
            "./assets/rebecca/4.jpg",
            "./assets/rebecca/5.jpg",
            "./assets/rebecca/6.jpg",
            "./assets/rebecca/djon.jpg",
            "./assets/rebecca/7.jpg",
            "./assets/rebecca/8.jpg"

        ]
        
        suspects.forEach((image) =>{
        const imgElement = document.createElement("img");
        imgElement.src = image;
        form.appendChild(imgElement);
        })

        let images = document.querySelectorAll(".suspects img")
        images.forEach((image)=>{
            image.addEventListener("click", function(){
                if(image.src.includes("djon")){
                    correctAnswer()
                }else{
                    alert("Răspuns greșit. Încercați din nou.");
                }
            })
        })
    }


    function correctAnswer(){
        form.innerHTML = `<h1 style="color:red;">Acesta este un răspuns corect</h1><br>
        
        <a target="_blank" href="https://imhustler.com/extras/review-us/">Evaluați jocul nostru 🙏 </a>
        
        <p style="color:white">
           
Rebecca Parker are o personalitate foarte curioasă și, după ce îl vede pe îngrijitor vorbind singur, devine obsedată să afle exact ce se întâmplă cu el. Din păcate pentru ea, și John își dă seama că Rebecca l-a văzut și devine neliniștit. Aceasta face tot posibilul pentru a afla adevărul despre îngrijitor, astfel că este nevoită să își șantajeze profesorul de matematică pentru parola site-ului școlii (nimeni nu îi poate refuza nimic Rebeccăi pentru că știe ce îi așteaptă în continuare). Profesorul ei lasă un bilet în dulapul Rebeccăi cu parola, dar criptat (astfel încât, dacă cineva îl vede, nu poate afla ce scrie pe el). Rebecca ajunge la adevăr și se îndreaptă spre liceu pentru a-I demasca pe îngrijitor și pe director. Ea lasă un bilet în dulapul Barbarei (în timp ce toată lumea este încă în clasă) și este brusc atacată din spate. Ea este răpită de îngrijitorul școlii și dusă în camera îngrijitorilor. Rebecca luptă din toate puterile împotriva lui John, dar fără succes. După ce toată lumea părăsește clădirea școlii, John o duce la sala de sport. Acolo o leagă și o interoghează. Realizând că nimeni nu știe nimic despre asta, îi taie venele și o lasă acolo. Se pare că, imediat ce părăsește școala pentru a se întoarce acasă, uită ce făcea acolo și de ce se afla acolo (din cauza bolii sale). Aruncă cuțitul și fuge. Se duce acasă, își pune hainele și mănușile de la școală într-o pungă și îi dă foc. Nu știe ce a făcut sau de ce, dar este sigur că nu este bine.



        </p>`
    }
    

}


function ardjikov(){

    document.querySelector(".checkcode").style.display = "none";
    let form = document.querySelector(".suspects")
    form.style.display = "block";
    form.innerHTML = `
    <h1 style="color: red;">Случай: Арджиков</h1>
    <input type="text" id="firstword" placeholder="Парола за телефона" class="form-control my-3">
    <input type="text" id="secondword" placeholder="Парола на емайла на Арджиков" class="form-control my-3">
    <input type="text" id="thirdword" placeholder="Ип на убиеца." class="form-control my-3">
    <button style="margin:auto;display:block;" class="btn btn-success checkanswer">Напред</button>
    `

    let check_btn = document.querySelector(".checkanswer")
    check_btn.addEventListener("click", function(){
        let firstword = document.getElementById("firstword").value.toLowerCase().replace(/\s/g, '')
        let secondword = document.getElementById("secondword").value.toLowerCase().replace(/\s/g, '')
        let thirdword = document.getElementById("thirdword").value.toLowerCase().replace(/\s/g, '')
        let firstcheck = false
        let secondcheck = false
        let thirdcheck = false


        if(firstword === "879"){
            firstcheck = true
        }
        if(secondword === "ardjikov777"){
            secondcheck = true
        }
        if(thirdword==="210.67.90.123"){
            thirdcheck = true
        }

        if(firstcheck === true && secondcheck === true && thirdcheck === true){
            steptwoRebecca()
        }else{
           check_btn.innerHTML = "Има грешна дума!"
           check_btn.style.background = "red"
           document.getElementById("firstword").value = ""
           document.getElementById("secondword").value = ""
           document.getElementById("thirdword").value = ""
           setTimeout(() => {
            check_btn.innerHTML = "Напред"
            check_btn.style.background = "#157347"
           }, 1000);
        } 

    })


    function steptwoRebecca(){
        form.innerHTML = `<h1 style="color: red;text-align:center;">Кой е убиецът?</h1>`
        let suspects = [
            "./assets/ardjikov/1.png",
            "./assets/ardjikov/2.png",
            "./assets/ardjikov/3.png",
            "./assets/ardjikov/4.png",
            "./assets/ardjikov/5.png",
            "./assets/ardjikov/6.png"
        ]
        
        suspects.forEach((image) =>{
        const imgElement = document.createElement("img");
        imgElement.src = image;
        form.appendChild(imgElement);
        })

        let images = document.querySelectorAll(".suspects img")
        images.forEach((image)=>{
            image.addEventListener("click", function(){
                if(image.src.includes("3")){
                    correctAnswer()
                }else{
                    alert("Грешен отговор. Опитай отново.");
                }
            })
        })
    }


    function correctAnswer(){
        form.innerHTML = `<h1 style="color:red;">Йоанна е закупила билките от картата на майка си. След това е отровила Арджиков,защото е разбрала, че сестра ѝ е била принудена от Арджиков да има взаимоотношения с него. (по-подробно обяснение ще има скоро</h1><br> <p style="color:white">
           
Успешно намери убиеца!

        </p>`
    }
    



}