
function unesiVisinu() {
    const visina = parseInt(prompt("Unesite visinu u centrimetrima"));
    const metri = Math.floor(visina / 100);
    const centimetri = visina % 100;
    return [metri, centimetri, visina];
  }
  
  const [metri, centimetri, visina] = unesiVisinu();
  document.write(`
         Upisana visina je:${visina}cm </br>
         Visoki ste ${metri}m i ${centimetri}cm </br> <hr>

         Upisana visina je:${visina}cm </br>
         Visoki ste ${metri}m
                  
         ` );
  