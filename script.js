const translations = {

    en: {

        title: "Your Future Starts Here",

        description:
        "Discover your ideal career path with artificial intelligence.",

        button: "Start Analysis",

        card1Title: "AI Analysis",
        card1Desc:
        "Smart career recommendations based on your personality.",

        card2Title: "Future Simulation",
        card2Desc:
        "Visualize your future profession and workspace.",

        card3Title: "Goal Tracking",
        card3Desc:
        "Track your progress and achieve your dreams."
    },

    sq: {

        title: "E Ardhmja Jote Fillon Këtu",

        description:
        "Zbulo profesionin ideal me ndihmën e inteligjencës artificiale.",

        button: "Fillo Analizën",

        card1Title: "Analizë me AI",
        card1Desc:
        "Rekomandime profesionale bazuar në personalitetin tënd.",

        card2Title: "Simulim i së Ardhmes",
        card2Desc:
        "Shiko profesionin dhe ambientin tënd të ardhshëm.",

        card3Title: "Ndjekja e Qëllimeve",
        card3Desc:
        "Ndjek progresin dhe realizo ëndrrat tua."
    }

};

function changeLanguage(language){

    document.getElementById("title").innerText =
        translations[language].title;

    document.getElementById("description").innerText =
        translations[language].description;

    document.getElementById("startBtn").innerText =
        translations[language].button;

    document.getElementById("card1Title").innerText =
        translations[language].card1Title;

    document.getElementById("card1Desc").innerText =
        translations[language].card1Desc;

    document.getElementById("card2Title").innerText =
        translations[language].card2Title;

    document.getElementById("card2Desc").innerText =
        translations[language].card2Desc;

    document.getElementById("card3Title").innerText =
        translations[language].card3Title;

    document.getElementById("card3Desc").innerText =
        translations[language].card3Desc;
}
window.onload= function(){
    setTimeout(()=> {
        document.getElementById("loader")
        .style.display = "none";

    }, 2500); 
}
let salary = "";

if(career === "Architect / Designer"){

    salary = "$4000 - $7000 / month";
}

else if(career === "Engineer"){

    salary = "$5000 - $9000 / month";
}

else if(career === "Software Developer"){

    salary = "$6000 - $12000 / month";
}

else if(career === "Doctor"){

    salary = "$7000 - $15000 / month";
}

document.getElementById("salary")
.innerText = "Estimated Salary: " + salary;

function setLanguage(language){
    localStorage.setItem("language",language);
    location.reload();
}
const texts = {
    en:{
        title:"Your Future Starts Here",
        desc:"Discover your ideal career with AI"
    },
    sq:{
        title:"E Ardhmja Jote Fillon Këtu",
        desc:"Zbulo profesionin tënd ideal me AI"
    }
};

window.onload = function(){

    let lang = localStorage.getItem("lang") || "en";

    document.getElementById("title").innerText = texts[lang].title;
    document.getElementById("desc").innerText = texts[lang].desc;
}
window.onload=function(){
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    }, 2000);
}