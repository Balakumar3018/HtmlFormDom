        
        //adding user values to table 
        let btn=document.querySelector('#submit-btn');
        btn.addEventListener("click",allDetails,false);

        function allDetails(){

        //alert("hi this is working");
        let fname=document.querySelector("#firstname");
        let td1=document.querySelector("#Dfirstname");
        td1.innerHTML=fname.value;

        let lname=document.querySelector("#lastname");
        let td2=document.querySelector("#Dlastname");
        td2.innerHTML=lname.value;

        let add1=document.querySelector("#Addressline1");
        let td3=document.querySelector("#Dadd1");
        td3.innerHTML=add1.value;

        let add2=document.querySelector("#Addressline2");
        let td4=document.querySelector("#Dadd2");
        td4.innerHTML=add2.value;

        let pin=document.querySelector("#pincode");
        let td5=document.querySelector("#Dpincode");
        td5.innerHTML=pin.value;

        //let food=document.querySelector("#pincode");
        let state=document.querySelector("#state");
        let td6=document.querySelector("#Dstate");
        td6.innerHTML=state.value;

        let country=document.querySelector("#Country");
        let td7=document.querySelector("#Dcountry");
        td7.innerHTML=country.value;
       
    }
