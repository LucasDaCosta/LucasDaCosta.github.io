function valimail() {
     if (
          document.getElementById("inputEmail4").value == ""
     )
          alert("Email invalido");

     else if (
          document.getElementById("inputEmail4").value.indexOf(".") == -1
     )
          alert("Email invalido");

     else if (
          document.getElementById("inputEmail4").value.indexOf("@") == -1
     )
          alert("Email invalido");

     else if (
          document.getElementById("inputPassword4").value == ""
     )
          alert("Senha invalida")

     else if (
          document.getElementById("inputPassword4").value != document.getElementById("confirmPassword").value
     )
          alert("Confirmação de senha inválida")

     else if (
          document.getElementById("inputAddress").value == ""
     )
          alert("Endereço invalido")

     else if (
          document.getElementById("inputCity").value == ""
     )
          alert("Cidade invalida")

     else if (
          document.getElementById("inputZip").value == ""
     )
          alert("CEP invalido")

     else (
          alert("Cadastro efetuado com sucesso")
     )
}    