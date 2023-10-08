function calcTotal() {
    const precio=1000
    console.log("ingreso a calcTotal")

    let cant=document.getElementById("cant").value
    console.log("cant=" + cant)
    
    if (cant>=0) {
        if (cant % 1 == 0) {
                let total=cant*precio
                console.log("total=" + total)

                let desc=document.getElementById("desc").value 
                console.log("desc="+desc)

                total=total - (total*desc/100)
            
                document.getElementById("total").innerHTML=total     
                document.getElementById("total").className="bg-info p-1"
                document.getElementById('Comprar').disabled=false
        } 
        else {
            document.getElementById("total").innerHTML="Debe ingresar un numero entero !!!"
            document.getElementById("total").className="bg-danger p-1"
            document.getElementById('Comprar').disabled=true

        }
    }else {
                document.getElementById("total").innerHTML="Debe ingresar una cantidad mayor 0"
                document.getElementById("total").className="bg-danger p-1"
    }
    
}




