



let bilettliste = [];

function registrerbilett() {

    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;
    const antallfeil = document.getElementById("feilmeldingantall");
    const fornavnfeil = document.getElementById("feilmeldingfornavn");
    const etternavnfeil = document.getElementById("feilmeldingetternavn");
    const telefonnrfeil = document.getElementById("feilmeldingtelefonnr");
    const epostfeil = document.getElementById("feilmeldingepost");

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexPhone = /^\d{8}$/;

    filmfeil.innerHTML="";
    antallfeil.innerHTML = '';
    fornavnfeil.innerHTML = '';
    etternavnfeil.innerHTML = '';
    telefonnrfeil.innerHTML = '';
    epostfeil.innerHTML = '';

    let errors = [];


    if (film === "") {
        filmfeil.innerHTML="Du må velge en film";
        errors.push('filmfeil');
    }

    if (antall.length === 0){
        antallfeil.innerHTML="Du må skrive noe inn i antall";
        errors.push('antallfeil');
    }


    if (fornavn.length === 0){
        fornavnfeil.innerHTML="Du må skrive noe inn i fornavn";
        errors.push('fornavnfeil');
    }


    if (etternavn.length === 0){
        etternavnfeil.innerHTML="Du må skrive noe inn i etternavn";
        errors.push('etternavnfeil');
    }


    if (telefonnr.length === 0){
        telefonnrfeil.innerHTML="Du må skrive noe inn i telefonnr";
        errors.push('telefonnrfeil');
    } else if (!regexPhone.test(telefonnr)) {
        telefonnrfeil.innerHTML = "Du må skrive et gyldig telefonnummer (8 siffer)";
        errors.push('telefonnrfeil');
    }


    if (epost.length === 0){
        epostfeil.innerHTML="Du må skrive noe inn i epost";
        errors.push('epostfeil');
    } else if (!regex.test(epost)) {
        epostfeil.innerHTML = "Du må skrive inn en gyldig epost";
        errors.push('epostfeil');
    }


    if (errors.length > 0) {
        return false;
    }else {
        const bilett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };
        bilettliste.push(bilett);
        oppdagerliste()

        document.getElementById("bilettForm").reset();
    }
}

function oppdagerliste() {
    let ut = "<table class='bilettliste-table'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th> " +
        "</tr>";

    for (let p of bilettliste) {
        ut += "<tr class='bilettliste-row'>";
        ut += "<td class='bilettliste-cell'>" + p.film + "</td><td class='bilettliste-cell'>" + p.antall + "</td><td class='bilettliste-cell'>" + p.fornavn + "</td><td class='bilettliste-cell'>" + p.etternavn + "</td><td class='bilettliste-cell'>" + p.telefonnr + "</td><td class='bilettliste-cell'>" + p.epost + "</td>";
        ut += "</tr>";
    }

    document.getElementById("bilettliste").innerHTML = ut;
}

function slettbiletter(){
    bilettliste = [];
    oppdagerliste()
}
