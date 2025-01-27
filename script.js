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
        "Interogatoriu cu Morello #2",
        "Interogatoriu cu Morello #1",
        "Interogatoriu cu Cecilia",
        "Interogatoriu cu Drake",
        "Ziarul",
        "Pictures at the Fair",
       "Interogatoriu cu Martin",
        "Foaie cu citate biblice"
    ]

    let additionalinfo_div = document.querySelector(".additional_info")
    additionalinfo_div.innerHTML = `<h1 style="color: red;">Ce documente o dovedesc?</h1>`
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
    additionalinfo_div.innerHTML += `<button style="margin:auto;display:block;" class="btn btn-success checkanswer">Verifică răspunsul</button>`

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

            const correctanswers = ["0", "4", "6", "1", "2", "3", "4", "5"];
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
        text.innerHTML = "Răspunsul dumneavoastră este corect!"
        document.querySelector(".result p").innerHTML = `<a target="_blank" href="https://imhustler.com/extras/review-us/">Evaluați jocul nostru 🙏 </a><br>

<br>Cumpărați adevărata afacere cu 10% OFF la întreaga comandă. <br>
<br>
Cod: MARIA <br>
<br>
<a href="https://ancheta-penala.com/collections/frontpage" target="blank">Link</a><br>

 <br>Din moment ce citatele din Biblie, Biblia însăși și agenda au fost găsite în camera Mariei, acest lucru duce la ideea că ea făcea propria investigație asupra crimelor menționate în interogatoriul cu Morello #2. Crimele au fost comise atât de tatăl lui Martin și al Mariei, cât și de Martin însuși. Maria a aflat și a vrut să îi spună domnului Drake, dar acesta a alungat-o pentru că era prea ocupată. Martin o ucide pe Maria pentru ca acest secret al său să rămână ascuns și el să poată fi la conducerea companiei.`
    }
    if(isithundred<50){
        text.innerHTML = "Răspunsul tău este greșit!"
    }
    if(isithundred>50 && isithundred < 90){
        text.innerHTML = "Sunteți aproape de răspuns!"
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
    <h1 style="color: red;">Dosarul: Martin</h1>
    <input type="text" id="firstword" placeholder="Primul cuvânt al cifrului" class="form-control my-3">
    <input type="text" id="secondword" placeholder="Al doilea cuvânt al cifrului" class="form-control my-3">
    <input type="text" id="thirdword" placeholder="Al treilea cuvânt al cifrului" class="form-control my-3">
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


        if(firstword === "canibal"){
            firstcheck = true
        }
        if(secondword.includes("maya") || secondword.includes("maia")  && secondword.includes("marin")){
            secondcheck = true
        }
        if(thirdword==="aeraotalru"){
            thirdcheck = true
        }

        if(firstcheck === true && secondcheck === true && thirdcheck === true){
            steptwoMartin()
        }else{
           check_btn.innerHTML = "Cuvânt greșit!"
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

    function steptwoMartin(){
        form.innerHTML = `<h1 style="color: red;text-align:center;">Cine este criminalul?</h1>`
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
                    alert("Răspuns greșit. Încercați din nou.");
                }
            })
        })
    }

    function correctAnswer(){
        form.innerHTML = `<h1 style="color:red;">Acesta este un răspuns corect</h1><br>
        <a target="_blank" href="https://imhustler.com/extras/review-us/">Evaluați jocul nostru 🙏 </a><br>

        <p style="color:white">
            Din 1975, oamenii care decid să viziteze atracțiile din jurul satului Skrăt dispar fără urmă. Toate cazurile sunt legate de zona Bușteni, unde circulă zvonuri despre un canibal care s-a stabilit acolo. De-a lungul anilor, în acea zonă s-au petrecut numeroase tragedii.

Kamen, polițistul local, începe o anchetă asupra acestor dispariții și reușește să-l descopere pe canibal. În ciuda pericolului, canibalul îi face lui Kamen o propunere neobișnuită: după fiecare moarte a unui localnic, Kamen să lase trupul în apropierea Cascada Urlătoarea, pentru ca acesta să-și satisfacă nevoile macabre. În schimb, promite că nimeni din sat nu va fi rănit. După lungi ezitări, Kamen acceptă propunerea.

Între timp, în sat izbucnește o dramă personală. Maia și soțul ei, Marin, nu se înțeleg de multă vreme. Aceasta o determină pe Maia să-l înșele cu Valentin, primarul satului. Ea rămâne însărcinată. În noaptea nașterii, copilul se naște cu grave dizabilități fizice. Marin, copleșit de disperare și crezând că este o milă pentru copil, decide să-l abandoneze în pădure, pentru a muri.

Canibalul găsește bebelușul abandonat și, în loc să-l mănânce, decide să aibă grijă de el. Îl crește ca pe propriul său copil și îl învață să adopte stilul său de viață înfiorător. De-a lungul anilor, copilul devine un vânător și prădător excepțional. Dar, spre deosebire de „tatăl” său, nu respectă înțelegerea dintre Kamen și canibal.

Într-o zi, în apropierea Cascada Urlătoarea, prădătorul atacă pe Martin, un băiat de nouă ani care mergea cu bicicleta. Copilul dispare fără urmă.

Felicitări, ați rezolvat cu succes acest caz!
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
        form.innerHTML = `<h1 style="color: red;text-align:center;">Cine este criminalul?</h1>`
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
           
Rebecca Parker are o personalitate foarte curioasă și, după ce îl vede pe curtanie vorbind singur, devine obsedată să afle exact ce se întâmplă cu el. Din păcate pentru ea, și John își dă seama că Rebecca l-a văzut și devine neliniștit. Aceasta face tot posibilul pentru a afla adevărul despre îngrijitor, astfel că este nevoită să își șantajeze profesorul de matematică pentru parola site-ului școlii (nimeni nu îi poate refuza nimic Rebeccăi pentru că știe ce îi așteaptă în continuare). Profesorul ei lasă un bilet în dulapul Rebeccăi cu parola, dar criptat (astfel încât, dacă cineva îl vede, nu poate afla ce scrie pe el). Rebecca ajunge la adevăr și se îndreaptă spre liceu pentru a-I demasca pe îngrijitor și pe director. Ea lasă un bilet în dulapul Barbarei (în timp ce toată lumea este încă în clasă) și este brusc atacată din spate. Ea este răpită de îngrijitorul școlii și dusă în camera îngrijitorilor. Rebecca luptă din toate puterile împotriva lui John, dar fără succes. După ce toată lumea părăsește clădirea școlii, John o duce la sala de sport. Acolo o leagă și o interoghează. Realizând că nimeni nu știe nimic despre asta, îi taie venele și o lasă acolo. Se pare că, imediat ce părăsește școala pentru a se întoarce acasă, uită ce făcea acolo și de ce se afla acolo (din cauza bolii sale). Aruncă cuțitul și fuge. Se duce acasă, își pune hainele și mănușile de la școală într-o pungă și îi dă foc. Nu știe ce a făcut sau de ce, dar este sigur că nu este bine.



        </p>`
    }
    

}


function ardjikov(){

    document.querySelector(".checkcode").style.display = "none";
    let form = document.querySelector(".suspects")
    form.style.display = "block";
    form.innerHTML = `
    <h1 style="color: red;">Caz: Ardzhikov</h1>
    <input type="text" id="firstword" placeholder="Parolă pentru telefon" class="form-control my-3">
    <input type="text" id="secondword" placeholder="Parola de e-mail a lui Ardzhikov" class="form-control my-3">
    <input type="text" id="thirdword" placeholder="Ip-ul ucigașului." class="form-control my-3">
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
        form.innerHTML = `<h1 style="color: red;text-align:center;">Cine este criminalul?</h1>`
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
                    alert("Răspuns greșit. Încercați din nou.");
                }
            })
        })
    }


    function correctAnswer(){
        form.innerHTML = `<h1 style="color:red;">Ați găsit cu succes criminalul!</h1><br>
        <a target="_blank" href="https://imhustler.com/extras/review-us/">Evaluați jocul nostru 🙏 </a><br>
        <p style="color:white;font-family:Arial">
        
           
Ucigașul lui Gheorghi Ardjikov a fost dezvăluit: conform informațiilor oficiale, criminalul este nepoata sa, Ioana Vărbanova.

Gheorghi Ardjikov a fost găsit mort în patul său în dimineața zilei de 20 martie, iar lângă el a fost descoperită o scrisoare de adio. Suspecții – membrii familiei sale – au fost interogați amănunțit, iar alibiurile lor au fost confirmate.

Gergana Vărbanova a fost eliminată din lista „suspecților” după ce au apărut fotografii cu ea de la o petrecere privată din Sofia.
În momentul crimei, ea se afla într-un bar de noapte popular. După verificarea computerului Maiei Vărbanova, s-a constatat că aceasta avea activitate dovedită pe email în timpul morții lui Ardjikov, astfel încât suspiciunile asupra ei au fost eliminate.

Majordomul, până atunci PRINCIPALUL suspect, a confirmat că în momentul crimei se afla la o stație de benzină și își alimenta mașina la o stație OMV. Toată lumea bănuia că este vorba despre o situație de conflicte de interese, dar povestea s-a dovedit a fi mult mai complexă. S-a descoperit că Gheorghi Ardjikov exercita presiuni psihice și sexuale asupra Gergana Vărbanova.

Refuzul acesteia era amenințat, citez, cu „viața la țară”. Un detectiv independent a reușit să o incrimineze pe Ioana Vărbanova, penetrând rețelele sociale ale lui Gheorghi Ardjikov, hackuind rețeaua casei și, folosind un tracker modern de IP, urmărind ce au căutat persoanele implicate în ultimele zile, înainte și după moartea lui Ardjikov. S-a dovedit că Ioana Vărbanova aflase despre șantajul exercitat asupra surorii sale, Ghergana. A achiziționat otravă „oleandru” de pe internet și a otrăvit whisky-ul preferat al unchiului său.

Astăzi, în fața Curții de Apel, Ioana Vărbanova și-a recunoscut vina.
        </p>`
    }
    



}