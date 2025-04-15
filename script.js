function validarFormulario(){

    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    const experiencia = parseInt(document.getElementById('experiencia').value, 10);
    const telefone = document.getElementById('telefone').value.trim();


    if(!nome){
        alert('Por favor, preencha o seu nome!');
        return;
    } else if(!cpf || cpf.length !== 11 || isNaN(cpf)){
        alert('Por favor, insira um CPF válido!');
        return;
    } else if(isNaN(idade) || idade < 18){
        alert('A idade deve ser um número maior ou igual a 18!');
        return;
    } else if(isNaN(experiencia) || experiencia < 0){
        alert('Os anos de experiência devem ser um número maior ou igual a 0');
        return; 
    } else if(!telefone || telefone.length !== 11 || isNaN(telefone)){
        alert('Por favor, insira um telefone válido!')
        return;
    }

    console.log(nome);
    console.log(cpf);
    console.log(idade);
    console.log(experiencia);
    console.log(telefone)

}