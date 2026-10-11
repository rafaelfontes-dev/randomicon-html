import { getRandomInt , getRandomBool } from "../lib/randomic.js";

const maleGenderBotanicalNames = [

    "Kiwi", "Morango", "Melão", "Abacate", "Cupuaçu", "Guaraná",
    "Açaí", "Jenipapo", "Tamarindo", "Mamão", "Limão", "Pêssego",
    "Abacaxi", "Coco", "Figo", "Caju", "Maracujá", "Mangostão",
    "Mirtilo", "Caqui", "Tamarilho", "Kiwano", "Camapu", "Abiu",
    "Longan", "Damasco", "Cacau",

    "Tomate", "Pimentão", "Repolho", "Pepino", "Brócolis", "Aspargo",
    "Feijão", "Rabanete", "Gengibre", "Amendoim", "Espinafre", "Alecrim",
    "Aipo", "Chuchu", "Milho", "Pistache", "Quiabo", "Maxixe",
    "Palmito", "Jiló", "Grão-de-bico", "Arroz", "Agrião", "Orégano",

];

const femaleGenderBotanicalNames = [

    "Jaca", "Pera", "Maçã", "Banana", "Pitanga", "Amora", "Framboesa",
    "Uva", "Toranja", "Laranja", "Mexerica", "Mimosa", "Bergamota",
    "Manga", "Melancia", "Ameixa", "Carambola", "Pitaya", "Romã",
    "Jabuticaba", "Groselha", "Goiaba", "Cereja", "Graviola", "Kinkan",
    "Acerola", "Durian", "Rambutam", "Seriguela", "Grumixama", "Lichia",
    "Gabiroba", "Mandacuru", "Nectarina",
    
    "Abóbora", "Abobrinha", "Alface", "Cebola", "Cenoura", "Pimenta",
    "Berinjela", "Batata", "Ervilha", "Hortelã", "Menta", "Couve-flor",
    "Beterraba", "Couve", "Amêndoa", "Castanha", "Vagem", "Azeitona",
    "Noz", "Mandioca", "Soja", "Acelga", "Alcachofra", "Lentilha",

];

const genderNeutralAdjectivesList = [

    // Emoção, comportamento, feitos...
    "Sorridente", "Feliz", "Radical", "Pontual", "Genial", "Imprudente",
    "Prudente", "Gentil", "Hesitante", "Impecável", "Sociável", "Contente",
    "Elegante", "Otimista", "Experiente", "Saudável", "Peralta", "Improvável",
    "Confiável", "Falante", "Realista", "Inteligente", "Amigável", "Paciente",
    "Irritante", "Zen", "Sentimental", "Ajudante", "Alarmante", "Familiar",
    "Pacifista", "Vigilante", "Feroz", "Voraz", "Insistente", "Insolente",
    "Consciente", "Petulante", "Carente", "Nerd", "Chique", "Forte", "Instável",
    "Impertinente", "Rebelde", "Admissível", "Territorialista", "Sustentável",
    "Inconveniente", "Agradável", "Exemplar", "Imparável", "Inevitável", "Liberal",
    "Popular", "Oniciente", "Favorável", "Incansável", "Tagarela", "Sensível",
    "Detestável", "Prodígio", "Bebê", "Temperamental", "Golpista", "Benevolente",
    "Uivante", "Ultrajante", "Brutal", "Calculista", "Altruísta", "Implicante",
    "Aniversariante", "Sênior", "Devagar", "Livre", "Responsável", "Dançante",
    "Independente", "Nobre", "Horripilante", "Farsante",
    
    "Paraquedista", "Artista", "Comentarista", "Maratonista", "Violinista",
    "Malabarista", "Barista", "Jornalista", "Documentarista", "Espadachim",
    "Samurai", "Musical", "Baixista", "Figurante", "Vidente", "Skatista",
    "Viajante", "Negociante", "Comandante", "Detetive", "Psicoanalista", "Mestre",
    "Fiscal", "Dublê", "Poeta", "Paisagista", "Filantropista", "Guitarrista",

    "Gigante", "Invisível", "Transparente", "Vibrante", "Escarlate",
    "Reluzente", "Desproporcional", "Apricô", "Verde", "Protuberante",
    "Saliente", "Cáqui", "Colossal",
    
    "Picante", "Refrescante", "Doce",

    "Estelar", "Lunar", "Extraterrestre", "Alienígena", "Tropical", "Global", "Boreal",
    "Glacial", "Nacional", "Regional", "Elemental", "Peninsular", "Equatorial",
    "Oriental", "Ocidental", "Silvestre", "Meridional", "Sideral", "Continental",

    "Flamejante", "Vacilante", "Experimental", "Incrível", "Extravagante",
    "Revoltante", "Universal", "Invencível", "Selvagem", "Sobrenatural",
    "Imortal", "Resistente", "Real", "Transcendental", "Inflamável",
    "Inacreditável", "Confortável", "Estatal", "Sazonal", "Infalível",
    "Sensacional", "Conceitual", "Flutuante", "Saltitante", "Orbitante",
    "Eficiente", "Funcional", "Especial", "Interessante", "Peculiar", "Polinomial",
    "Imprevisível", "Uniforme", "Normal", "Fantasma", "Ilegal", "Inigualável",
    "Atemporal", "Informante", "Questionável", "Abundante", "Milenar",
    "Implacável", "Artificial", "Humanóide", "Realista", "Abissal", "Andróide",
    "Filosofal", "Subliminar", "Massante", "Elementar", "Frágil", "Viável",
    "Insalubre", "Nuclear", "Promocional", "Discutível", "Imperceptível",
    "Imensurável", "Futurista", "Cafona", "Crocante", "Matinal", "Neon",
    "Medieval", "Primordial", "Virtual", "Escaldante", "Rasante", "Redundante",
    "Crepuscular", "Incomum", "Singular", "Secular", "Ancestral", "Paradoxal",
    "Intragável", "Ciborgue", "Patrimonial", "Emergencial", "Eminente", "Iminente",
    "Ilustre", "Computacional", "Neural", "Memorável", "Civil", "Imune",

    "Cyberpunk", "Designer", "Influencer", "Pop", "Hacker", "Fashion",
];

const genderPendingAdjectivesList = [

    "Rabugent", "Raivos", "Surpres", "Emburrad", "Orgulhos", "Intens",
    "Corrompid", "Traiçoeir", "Bonit", "Nostálgic", "Errad", "Escandalos",
    "Esquisit", "Preguiços", "Dorminhoc", "Maluc", "Insan", "Insegur",
    "Irritad", "Melancólic", "Corajos", "Étic", "Sábi", "Prestigios", "Roubad",
    "Tolinh", "Revoltad", "Revolucionári", "Medonh", "Sinistr", "Sonolent",
    "Caótic", "Negativ", "Positiv", "Espert", "Astut", "Ardilos", "Manhos",
    "Visionári", "Agitad", "Misterios", "Encalorad", "Calm", "Polêmic",
    "Discret", "Satisfeit", "Alérgic", "Sortud", "Pensativ", "Lendári",
    "Fratern", "Criativ", "Humorad", "Honorári", "Mágic", "Enfeitiçad",
    "Estudios", "Reservad", "Dinâmic", "Atrevid", "Qualificad", "Romântic",
    "Introvertid", "Extrovertid", "Dedicad", "Ligeir", "Tímid", "Crític",
    "Prevenid", "Grat", "Invejos", "Voluntári", "Contratad", "Intrometid",
    "Ocupad", "Despreocupad", "Paranoic", "Maquiad", "Silencios", "Singel",
    "Pragmátic", "Pentead", "Envergonhad", "Esclarecid", "Conselheir",
    "Tranquil", "Supervisionad", "Vigiad", "Descolad", "Centrad", "Libert",
    "Higiênic", "Produtiv", "Esquecid", "Acabad", "Interceptad", "Alucinad",
    "Performátic", "Sonâmbul", "Bondos", "Impedid", "Milionári", "Ambicios",
    "Briguent", "Icônic", "Protegid", "Expressiv", "Fugitiv", "Cretin",
    "Fajut", "Ordinári", "Autêntic", "Fingid", "Estratégic", "Indecis",
    "Estressad", "Apaixonad", "Nocautead", "Relaxad", "Enjoad", "Mimad",
    "Atrapalhad", "Engraçad", "Agressiv", "Arisc", "Histéric", "Ingênu",
    "Bisbilhoteir", "Curios", "Seren", "Explicativ", "Intuitiv",  "Querid",
    "Humanizad", "Empátic", "Pervers", "Imprátic", "Fals", "Ousad", "Megalomaníac",
    "Talentos", "Mesquinh", "Séri", "Parceir", "Estóic", "Platônic", "Nociv",
    "Tiran", "Just", "Justiceir", "Heróic", "Fanátic", "Equilibrad", "Reclus",
    "Reconhecid", "Premiad", "Assustad", "Mercenári", "Entediad", "Inspirad",
    "Travess", "Prolix", "Desconfiad", "Amoros", "Neutr", "Centenári", "Malicios",
    "Queridinh", "Distraíd", "Privilegiad", "Mafios", "Participativ", "Descontrolad",
    "Ultrapassad", "Carismátic", "Dign", "Adversári", "Caprichos", "Incomodad",
    "Incompreendid", "Competitiv", "Companheir", "Censurad", "Imprópri", "Veteran",
    "Extrem", "Esgotad", "Domesticad",

    "Arquitet", "Futebolístic", "Advogad", "Polític", "Pirotécnic",
    "Metalúrgic", "Fazendeir", "Jardineir", "Jurídic", "Aposentad",
    "Chapeleir",

    "Esmigalhad", "Minúscul", "Disfarçad", "Dourad", "Musculos", "Castanh",
    "Brilhos", "Tostad", "Gigantesc", "Achatad", "Colorid", "Cinzent",
    "Luminos", "Rosad", "Pratead", "Long", "Bronzead", "Microscópic",
    "Estampad", "Holográfic", "Camuflad", "Volumos", "Espaços", "Fechad",
    "Azulad", "Quadrad",

    "Cheiros", "Ácid", "Perfumad", "Mentolad", "Temperad", "Descafeinad",
    "Suculent", "Azed", "Salgad", "Frit", "Cítric", "Ardid", "Gelad",

    "Aquátic", "Vulcânic", "Marítim", "Ilhad", "Cósmic", "Submarin",
    "Alad", "Atlântic", "Pacífic", "Galátic", "Oceânic", "Endêmic",
    "Antártic", "Roman", "Atmosféric", "Noturn", "Meteóric", "Desértic",

    "Extraodinári", "Raríssim", "Imprecis", "Alternativ", "Pesad",
    "Probabilístic", "Subterrâne", "Revolucionári", "Massiv", "Acrílic",
    "Robótic", "Elétric", "Metálic", "Peçonhent", "Secret", "Ilusóri",
    "Elástic", "Borrachud", "Perigos", "Falsificad", "Calóric", "Óbvi",
    "Mecânic", "Dúbi", "Duvidos", "Fossilizad", "Sintétic", "Pontiagud",
    "Eletromagnétic", "Explosiv", "Teóric", "Avançad", "Tecnológic",
    "Metafísic", "Ambígu", "Econômic", "Gripad", "Giratóri", "Lacrimogêne",
    "Aerodinâmic", "Gasos", "Distint", "Pressurizad", "Cristalizad",
    "Anônim", "Fotogênic", "Turbinad", "Cibernétic", "Notóri", "Fabricad",
    "Burocrátic", "Liquefeit", "Esféric", "Ásper", "Teleguiad", "Amanteigad",
    "Suspeit", "Oxidad", "Hidratad", "Aracníde", "Criptografad", "Voltaic",
    "Ofuscad", "Errátic", "Rasteir", "Automátic", "Trifásic", "Banid",
    "Industrializad", "Geométric", "Quilométric", "Esotéric", "Psiquíc",
    "Gratuit", "Tardi", "Plasmátic", "Dracônic", "Anfíbi", "Arenos", "Rítmic",
    "Quântic", "Literári", "Históric", "Baratead", "Forjad", "Proibid",
    "Absolut", "Jurássic", "Cáustic", "Atômic", "Virulent", "Sombri",
    "Defensiv", "Corrosiv", "Explícit", "Catastrófic", "Paralel", "Suprem",
    "Mitológic", "Mític", "Arbitrári", "Euclidian", "Galvânic", "Exótic",
    "Polid", "Parcelad", "Bombástic", "Fretad", "Radioativ", "Espinhent",
    "Terapêutic", "Fraudulent", "Biônic", "Rebaixad", "Bélic", "Fluídic",
    "Energétic", "Obscur", "Trevos", "Desnecessári", "Licenciad", "Contagios",
    "Descarrilhad", "Folclóric", "Trincad", "Rastread", "Oníric", "Cremos",
    "Encanad", "Natalin",

];

const rareNamesList = [

    "Laranja Mecânica", "Milho Milionário", "Feijão Mágico", "Pepino Cretino",
    "Kiwi Preguiçoso", "Laranja Irritante", "Maracujá Zen", "Manga Longa",
    "Tomate Automático", "Pimenta Ardida", "Aipo Pop", "Carambola Estelar",
    "Pitaya Dracônica", "Guaraná Antártico", "Romã Romana", "Amendoim Salgado",
    "Pitanga Reluzente", "Jaca Forte", "Batata Frita", "Maracujá Calmo",
    "Morango Amoroso", "Jaca Meteórica", "Mandacuru Espinhento", "Maçã Verde",
    "Coco Prestigioso", "Pêssego Apricô", "Pimenta Gelada", "Alface Sonolenta",
    "Cebola Lacrimogênea", "Cereja Bombástica", "Cacau Falsificado", "Mimosa Manhosa",
    "Repolho Fechado", "Caqui Cáqui", "Uva Verde", "Castanha Castanha",
    "Berinjela Singela", "Batata Voltaica", "Chuchu Político", "Alecrim Dourado",
    "Abóbora Horripilante", "Espinafre Invencível", "Banana Oceânica",
    "Melancia Desértica", "Gabiroba Roubada", "Pepino Marítimo", "Chuchu Teleguiado",
    "Abiu Civil", "Coco Psíquico", "Cacau Mentolado",

];

const drawnRareNames = [];

let rareNameEncountersCount = 0,
    drawnNamesCount         = 0,
    namePossibilities       =
        ( ( maleGenderBotanicalNames.length + femaleGenderBotanicalNames.length ) *
        (   genderNeutralAdjectivesList.length +
            genderPendingAdjectivesList.length
        ) );

console.log( "Total de possibilidades de nomes da sorte: " + namePossibilities )
console.log( `Probabilidade de nome raro:
    ${( 100 * rareNamesList.length / namePossibilities )}%
    (${rareNamesList.length} em ${namePossibilities})`
)

function getRandomBotanicalFunnyName() {

    let result = "";

    let rndNameGender = ( getRandomBool() ? "M" : "F" );
    let isAdjGenderNeutral = false;

    let rndNameArray = (
        rndNameGender === "M" ?
            maleGenderBotanicalNames :
            femaleGenderBotanicalNames
    );

    let rndAdjectiveArray = null;

    if( getRandomBool() ) {
        rndAdjectiveArray = genderNeutralAdjectivesList;
        isAdjGenderNeutral = true;
    } else {
        rndAdjectiveArray = genderPendingAdjectivesList;
    };

    let rndNameIndex = getRandomInt( 0, rndNameArray.length - 1 );
    let rndAdjectiveIndex = getRandomInt( 0, rndAdjectiveArray.length - 1 );

    result =
        rndNameArray[ rndNameIndex ] + " " +
        rndAdjectiveArray[ rndAdjectiveIndex ] +
        ( isAdjGenderNeutral? "" : ( rndNameGender === "M" ? "o" : "a" ) );

    return result;

}

function initFunnyNameEventListeners() {

    const textBoxElement            = document.getElementById("funnyname-result-value");
    const rareNameMessageElement    = document.getElementById("funnyname-rare-value-message");

    document.getElementById("funnyname-button-draw").addEventListener( "click", () => {
        
        let funnyName = getRandomBotanicalFunnyName();
        let isNameRare = rareNamesList.includes( funnyName );

        drawnNamesCount++;
        //nameCounterElement.textContent =
        //    `Contagem de nomes gerados: ${drawnNamesCount}`;

        textBoxElement.textContent = funnyName;

        textBoxElement.style.fontWeight =
        ( isNameRare ? "bold" : "normal" );

        rareNameMessageElement.style.visibility =
        ( isNameRare ? "visible" : "hidden" );

        if( isNameRare ){

            if( !drawnRareNames.includes( funnyName ) ){

                rareNameEncountersCount++;

                drawnRareNames.push( funnyName );

                const rareNamesFoundDiv = document.getElementById(
                    "funnyname-rare-value-found-div"
                );

                const rareNamesFoundList = document.getElementById(
                    "funnyname-rare-value-found-list"
                );

                const newListItem = document.createElement("li");
                newListItem.textContent = funnyName;

                rareNamesFoundList.appendChild( newListItem );
                rareNamesFoundDiv.style.visibility = "visible";

                if( drawnRareNames.length == rareNamesList.length ){
                    const achievemenElement = document.getElementById("funnyname-impossible-achievement");
                    achievemenElement.innerHTML = `
                        <h3>COMO VOCÊ ENCONTROU TODOS OS NOMES RAROS⁉️</h3>
                        <p>Enfim, seja lá como descobriu isso, meus parabéns!! 🎉</p>
                    `;
                    achievemenElement.style.visibility = "visible";
                }

            }

            /*
            rareNameCounterElement.textContent =
                `Contagem de nomes raros: ${rareNameEncountersCount}`;

            rareNameCounterElement.style.visibility = "visible";
            */

        }

    } );

    document.getElementById("funnyname-button-clear").addEventListener( "click", () => {
        textBoxElement.textContent = "--";
    } );

}

initFunnyNameEventListeners();