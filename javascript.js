        
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

        let td4=document.querySelector("#Dgender");
        Gender();

        let pin=document.querySelector("#pincode");
        let td5=document.querySelector("#Dpincode");
        td5.innerHTML=pin.value;

        let food=document.querySelector("#pincode");
        let favfood=document.getElementsByName("favoritefood");
        let td6=document.querySelector("#Dfavoritefood");
        listfood  ();

        let state=document.querySelector("#state");
        let td7=document.querySelector("#Dstate");
        td7.innerHTML=state.value;

        let country=document.querySelector("#Country");
        let td8=document.querySelector("#Dcountry");
        td8.innerHTML=country.value;

        function Gender(){
          if (document.querySelector('#male').checked) {
            let male=document.querySelector("#male")
            td4.innerHTML=male.value;
          }else if(document.querySelector('#female').checked){
            let female=document.querySelector("#female")
            td4.innerHTML=female.value;
          }
          else{
            td4.innerHTML='undefined';
          }
        }

        function listfood(){
          let temp=[];
          for(let i=0;i<favfood.length;i++){
              if(favfood[i].checked){
                temp.push(favfood[i].value);
              }
          }
          td6.innerHTML=temp;
        }
       
    }
