const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

//en este evento  contuinuacion se hara que el evento visible; si es falso no mustra nada
//si es verdadero combierte la contraseña a text y la muestra. 
    document.addEventListener("change", (e)=>{
        if (e.target === $visible){
            if($visible.checked === false) $password.type= "password";
            else $password.type ="text";
        }
    });
    //en esteevento se hara funconalidad a restablecer la contraseña
   // document.addEventListener("change", (e)=>{
    //    if (e.target===$visible) {
     //       if($visible.checked===false) $password.type="password";

   //     }
  //  }

   // )

    /* aca se conectara este formulario con la base de datos Mysql. 
    //mientras tanto se conectara con el index.
    document.addEventListener("click", (e)=>{
        if(e.target === $submit{
            if($password.value !== "" && $username.value !== ""){
                e.preventDefault();
                window.location.href = "logeo.html";
            }
        }
    })*/
    