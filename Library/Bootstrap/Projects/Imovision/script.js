/* 1.1 Campos: nome, email, cidade, bairro, rua e numero.
1.2 Verificar se o email é valido no front end, tornar todos os campos obrigatórios */


  const form   = document.querySelector("#form");
  const campos = document.querySelectorAll(".form-control");
  const spans  = document.querySelectorAll(".span-require");

  form.addEventListener("submit", (event)=> {
    event.preventDefault()
    nameValidate();
    emailValidade();
    cityValidate();
    neighborhoodValidate();
    streetValidate();
    numberValidate();

  // Verifica se existem spans com erros
  const spansError = document.querySelectorAll('.span-require:not([style="display: none;"])');
    if (spansError.length === 0) {
  // Redireciona para a home
    window.location.replace("./Home.html");
  }

  
  })

  function setError(index){
    campos[index].style.border = "1px solid #e63636";
    spans[index].style.display = "block";
  }

  function removeError(index){
    campos[index].style.border = "";
    spans[index].style.display = "none";

  }
  
  function nameValidate(){
    if(campos[0].value.length <3){
      setError(0);
    
    }else{
     removeError(0);
    }
  }

  function emailValidade(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if( !emailRegex.test(campos[1].value)){
      setError(1)


    }else{
      removeError(1)
    }
  }

  function cityValidate(){
    const cityRegex = /^[a-zA-ZÀ-ú\s]+$/;

    if(!cityRegex.test(campos[2].value)){
      setError(2)

    }else{
      removeError(2)
    }

  }

  function neighborhoodValidate(){
    const neighborhoodRegex = /^[a-zA-ZÀ-ú\s]+$/;

    if(!neighborhoodRegex.test(campos[3].value)){
      setError(3)

    }else{
      removeError(3)
    }

  }

  function streetValidate(){
    const streetRegex = /^[a-zA-Z0-9À-ú\s',.\-\/&]+$/;
    if( !streetRegex.test(campos[4].value)){
      setError(4)
    }else{
      removeError(4)
    }

  }

  function numberValidate(){
    const numberRegex = /^[-+]?\d*\.?\d+$/;
    if( !numberRegex.test(campos[5].value)){
      setError(5)
    }else{
      removeError(5)
    }

  }

