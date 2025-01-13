function add() {
    try {
        let a= document.getElementById("username").value;
        if (a.length<3) {
            throw new Error("Daxil edilen deyer 3 herfden boyuk olmalidir!");
        } 
        if (a.split("").some(element => !isNaN(element))) {
                throw new Error("Daxil etdiyiniz deyerde reqemlerden istifade olunmamalidir!");
            } 
        if (!a.includes("@")) {
            throw new Error("Daxil edilen deyerde @ simvolu olmalidir!");
        }
    } catch (error) {
       alert(error);
        
    }
}




// function add() {
//     try {
//         let a = document.getElementById("username").value; 
//         if (isNaN(a)) {
//             throw new Error("Daxil etdiyiniz deyer yalniz reqemlerden ibaret olmalidir!");
//         }
//         if (a>=120) {
//             throw new Error("Duzgun deyer daxil edin!");
//         }
//         if (a<=0) {
//             throw new Error("Duzgun deyer daxil edin!");
//         }
//     } catch (error) {
//         alert(error)
//     }
// }
   