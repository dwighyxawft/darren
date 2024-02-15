var loggedIn = localStorage.getItem("login");
if(typeof(loggedIn) == undefined || loggedIn == "false" || !loggedIn){
    location.href = "index.html";
}
 else{
    var tbody = document.querySelectorAll("tbody");
    function get_letters(){
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var string = "";
        for(var i = 0; i<9; i++){
            var chosenletter = letters[Math.floor(Math.random() * letters.length)];
            string+=chosenletter;
        }
        return string;
    }
    
    var third = [{p_code:"QCTIOVIPX", r_date: "2022/01/04", p_date: "2022/01/05", amount: "7,500", status: "Deposit"}, {p_code:"PPTIOVIEX", r_date: "2022/02/04", p_date: "2022/02/05", amount: "7,500", status: "Deposit"}, {p_code:"BAVTOVIEX", r_date: "2022/03/04", p_date: "2022/03/05", amount: "7,500", status: "Deposit"}, {p_code:"CCAAOVIEU", r_date: "2022/04/04", p_date: "2022/04/05", amount: "7,500", status: "Deposit"}, {p_code:"QRCVBADX", r_date: "2022/05/04", p_date: "2022/05/05", amount: "7,500", status: "Deposit"}, {p_code:"RVBATCJK", r_date: "2022/06/04", p_date: "2022/06/05", amount: "7,500", status: "Deposit"}, {p_code:"QCTIOVIEX", r_date: "2022/07/04", p_date: "2022/07/05", amount: "7,500", status: "Deposit"}, {p_code:"ACDIOVIDE", r_date: "2022/08/06", p_date: "2022/08/07", amount: "7,500", status: "Deposit"}, {p_code:"BCEIOFTBL", r_date: "2022/09/02", p_date: "2022/09/03", amount: "7,500", status: "Deposit"}, {p_code:"ARESBKJRC", r_date: "2022/10/04", p_date: "2022/10/05", amount: "7,500", status: "Deposit"}, {p_code:"BVETMHIMD", r_date: "2022/11/04", p_date: "2022/11/05", amount: "7,500", status: "Deposit"}, {p_code:"RQHWSDXAD", r_date: "2022/12/04", p_date: "2022/12/05", amount: "7,500", status: "Deposit"}];
    
    var fourth = [{p_code:"ZXAQRQMRE", r_date: "2021/01/05", p_date: "2021/01/06", amount: "7,500", status: "Deposit"}, {p_code:"DAMGJCGNF", r_date: "2021/02/06", p_date: "2022/02/07", amount: "7,500", status: "Deposit"}, {p_code:"HPFHHVEBG", r_date: "2021/03/02", p_date: "2021/03/03", amount: "7,500", status: "Deposit"}, {p_code:"KYTYGCOUZ", r_date: "2021/04/07", p_date: "2021/04/08", amount: "7,500", status: "Deposit"}, {p_code:"ZQNIAOQCX", r_date: "2021/05/05", p_date: "2021/05/06", amount: "7,500", status: "Deposit"}, {p_code:"UEWBBUSSD", r_date: "2021/06/01", p_date: "2021/06/02", amount: "7,500", status: "Deposit"}, {p_code:"OJKTOTNEU", r_date: "2021/07/06", p_date: "2021/07/07", amount: "7,500", status: "Deposit"}, {p_code:"JMYBGABDG", r_date: "2021/08/06", p_date: "2021/08/07", amount: "7,500", status: "Deposit"}, {p_code:"KGOVBTBSL", r_date: "2021/09/03", p_date: "2021/09/04", amount: "7,500", status: "Deposit"}, {p_code:"YFOTRHXGY", r_date: "2021/10/04", p_date: "2021/10/06", amount: "7,500", status: "Deposit"}, {p_code:"BYYIWAGBC", r_date: "2021/11/02", p_date: "2021/11/05", amount: "7,500", status: "Deposit"}, {p_code:"EAQNHYSBX", r_date: "2021/12/04", p_date: "2021/12/05", amount: "7,500", status: "Deposit"}];
    
       var second = [{p_code:"QCTIOVIEX", r_date: "2023/01/04", p_date: "2023/01/05", amount: "7,500", status: "Deposit"}, {p_code:"ACDIOVIDE", r_date: "2023/02/06", p_date: "2023/02/07", amount: "7,500", status: "Deposit"}, {p_code:"BCEIOFTBL", r_date: "2023/03/02", p_date: "2023/03/03", amount: "7,500", status: "Deposit"}, {p_code:"ARESBKJRC", r_date: "2023/04/04", p_date: "2023/04/05", amount: "7,500", status: "Deposit"}, {p_code:"BVETMHIMD", r_date: "2023/05/04", p_date: "2023/05/05", amount: "7,500", status: "Deposit"}, {p_code:"RGNTMHIMD", r_date: "2023/06/04", p_date: "2023/06/05", amount: "7,500", status: "Deposit"}, {p_code:"B0ETMHIRG", r_date: "2023/07/07", p_date: "2023/07/08", amount: "7,500", status: "Deposit"}, {p_code:"BVTTMRIMD", r_date: "2023/08/02", p_date: "2023/08/03", amount: "7,500", status: "Deposit"}, {p_code:"NOBSTGHBFR", r_date: "2023/09/01", p_date: "2023/09/02", amount: "7,500", status: "Deposit"}, {p_code:"NHRVBTCBBFR", r_date: "2023/10/12", p_date: "2023/10/13", amount: "7,500", status: "Deposit"}, {p_code:"ABGHILOMP", r_date: "2023/11/07", p_date: "2023/11/08", amount: "7,500", status: "Deposit"}, {p_code:"QRSWBVOLT", r_date: "2023/12/10", p_date: "2023/12/11", amount: "7,500", status: "Deposit"}];

     var first = [{p_code:"QQROBBSTU", r_date: "2024/01/03", p_date: "2023/09/04", amount: "7,500", status: "Deposit"}];
    var arrs = [first, second, third, fourth];
    
    tbody.forEach(function(tab){
       if(tab.hasAttribute("data-option")){
        var option = tab.getAttribute("data-option");
        var chosen_array = arrs[Number(option)];
        var templates = "";
        for(var j=0; j<chosen_array.length;j++){
            templates += `<tr><td>${chosen_array[j].p_code}</td><td>${chosen_array[j].r_date}</td><td>${chosen_array[j].p_date}</td><td>${chosen_array[j].amount}</td><td>${chosen_array[j].status}</td></tr>`;
        }
        tab.innerHTML = templates;
       }
    })
    var links = document.querySelectorAll("button.nav-link");
    var pages = document.querySelectorAll("div.pagedivs");
    links.forEach(function(link){
       
        link.addEventListener("click", function(){
            var id = this.getAttribute("id");
        if(id != "logout"){
            for(var a = 0; a<links.length;a++){
                links[a].classList.remove("active");
            }
            this.classList.add("active");
           
           
            for(var b=0;b<pages.length;b++){
                pages[b].classList.add("d-none");
                if(pages[b].classList.contains(id)){
                    pages[b].classList.remove("d-none");
                }
            }
        }
        else{
            localStorage.setItem("login", false);
            location.href = "index.html";
        }
            
        })
    })
    
 }
