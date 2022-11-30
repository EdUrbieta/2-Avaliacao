const cb = document.querySelector('#newsletter')
const s = document.querySelector('#s');
const n = document.querySelector('#n');

function submit(){
    const candidatura = new Object();

    candidatura.nome = document.getElementById("nome").value;
    candidatura.email = document.getElementById("email").value;
    candidatura.idade = parseInt(document.getElementById("idade").value);
    if (s.checked) {
        candidatura.maior_idade = true;
    } else {
        candidatura.maior_idade = false;
    }
    candidatura.newsletter = cb.checked;
    candidatura.mensagem_candidatura = document.getElementById("candmsg").value;


    console.log(candidatura);
}