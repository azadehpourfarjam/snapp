let flag=true;
$('.mobile').click(function (){
   if (flag===true){
       $('.header .navBox').slideDown()
       flag=false;
   }else {
       $('.header .navBox').slideUp();
       flag=true;
   }
})