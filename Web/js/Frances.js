function llenar_cuadro()
{
    var pp=Number(document.getElementById('pp').value);
    switch (pp) {
        case 1:fila1();  break;
        case 2:fila1(); fila2();  break;
        case 3:fila1(); fila2(); fila3(); break;
        case 4:fila1(); fila2(); fila3(); fila4();break;
        case 5:fila1(); fila2(); fila3(); fila4();fila5();break;
        
        default:
            break;
    }
  
    

   precio_bono();
   flujo_bonista();
   van_bonista()

}

function fila1()
{
    valor_nominal();
    interes_cupon();
    cuota();
    amortizacion();
    bono_final();
}
function fila2()
{
    var B2=Number(document.getElementById('bf1').value);
    var tc=Number(document.getElementById('tc').value);
    tc=tc/100;
    var I2=-(B2*tc);
    document.getElementById('b2').value=B2;
    document.getElementById('i2').value=I2;



   
    var interes= -(tc*B2)/(1-(Math.pow((1+tc), -4)));
    document.getElementById('c2').value=interes;


    var c2=Number(document.getElementById('c2').value);
    var i2=Number(document.getElementById('i2').value);
 
    var a2=c2-i2;
    document.getElementById('a2').value=a2;


    var b2=Number(document.getElementById('b2').value);
    var a2=Number(document.getElementById('a2').value);

var bf2=b2+a2;
if(bf2<10)
{
    bf2=0;
}
document.getElementById('bf2').value=bf2;

}


function fila3()
{
    var B3=Number(document.getElementById('bf2').value);
    var tc=Number(document.getElementById('tc').value);
    tc=tc/100;
    var I3=-(B3*tc);
    document.getElementById('b3').value=B3;
    document.getElementById('i3').value=I3;



   
    var interes= -(tc*B3)/(1-(Math.pow((1+tc), -3)));
    document.getElementById('c3').value=interes;


    var c3=Number(document.getElementById('c3').value);
    var i3=Number(document.getElementById('i3').value);
 
    var a3=c3-i3;
    document.getElementById('a3').value=a3;


    var b3=Number(document.getElementById('b3').value);
    var a3=Number(document.getElementById('a3').value);

var bf3=b3+a3;
if(bf3<10)
{
    bf3=0;
}
document.getElementById('bf3').value=bf3;

}

function fila4()
{
    var B4=Number(document.getElementById('bf3').value);
    var tc=Number(document.getElementById('tc').value);
    tc=tc/100;
    var I4=-(B4*tc);
    document.getElementById('b4').value=B4;
    document.getElementById('i4').value=I4;



   
    var interes= -(tc*B4)/(1-(Math.pow((1+tc), -2)));
    document.getElementById('c4').value=interes;


    var c4=Number(document.getElementById('c4').value);
    var i4=Number(document.getElementById('i4').value);
 
    var a4=c4-i4;
    document.getElementById('a4').value=a4;


    var b4=Number(document.getElementById('b4').value);
    var a4=Number(document.getElementById('a4').value);

var bf4=b4+a4;
if(bf4<10)
{
    bf4=0;
}
document.getElementById('bf4').value=bf4;

}


function fila5()
{
    var B5=Number(document.getElementById('bf4').value);
    var tc=Number(document.getElementById('tc').value);
    tc=tc/100;
    var I5=-(B5*tc);
    document.getElementById('b5').value=B5;
    document.getElementById('i5').value=I5;



   
    var interes= -(tc*B5)/(1-(Math.pow((1+tc), -1)));
    document.getElementById('c5').value=interes;


    var c5=Number(document.getElementById('c5').value);
    var i5=Number(document.getElementById('i5').value);
 
    var a5=c5-i5;
    document.getElementById('a5').value=a5;


    
    var a5=Number(document.getElementById('a5').value);

var bf5=B5+a5;
if(bf5<10)
{
    bf5=0;
}
document.getElementById('bf5').value=bf5;

}



function valor_nominal()
{
    var vn= Number(document.getElementById('vn').value);
    document.getElementById('b1').value=vn;
    document.getElementById('bf0').value=vn;
}

function cuota()
{  
    var tc=Number(document.getElementById('tc').value);
    tc=tc/100;
    var vn= Number(document.getElementById('vn').value);
    var interes= -(tc*vn)/(1-(Math.pow((1+tc), -5)));
    document.getElementById('c1').value=interes;
}


function interes_cupon()
{
  var tc= -Number(document.getElementById('tc').value)*Number(document.getElementById('vn').value);
  tc=tc/100;

  document.getElementById('i1').value=tc;
}

function amortizacion()
{
   var c1=Number(document.getElementById('c1').value);
   var i1=Number(document.getElementById('i1').value);

   var a1=c1-i1;
   document.getElementById('a1').value=a1;

}


function bono_final()
{

var b1=Number(document.getElementById('b1').value);
var a1=Number(document.getElementById('a1').value);

var bf1=b1+a1;
document.getElementById('bf1').value=bf1;
}






function precio_bono()
{
    var pb=Number(document.getElementById('c1').value)+Number(document.getElementById('c2').value)+Number(document.getElementById('c3').value)+Number(document.getElementById('c4').value)+Number(document.getElementById('c5').value);
    document.getElementById('pb').value=pb*-1;
}


function flujo_bonista()
{

    var fj0=-(Number(document.getElementById('vn').value));
    document.getElementById('fj0').value=fj0;


    var fj1=Number(document.getElementById('c1').value)*-1;
    document.getElementById('fj1').value=fj1;

    var fj2=Number(document.getElementById('c2').value)*-1;
    document.getElementById('fj2').value=fj2;

    
    var fj3=Number(document.getElementById('c3').value)*-1;
    document.getElementById('fj3').value=fj3;

    var fj4=Number(document.getElementById('c4').value)*-1;
    document.getElementById('fj4').value=fj4;

    var fj5=Number(document.getElementById('c5').value)*-1;
    document.getElementById('fj5').value=fj5;

}


function van_bonista()
{
var flujo=Number(document.getElementById('fj1').value);
var tc=Number(document.getElementById('tc').value);
tc=tc/100;
var van=Number(document.getElementById('fj1').value)+Number(document.getElementById('fj2').value)+Number(document.getElementById('fj3').value)+Number(document.getElementById('fj4').value)+Number(document.getElementById('fj5').value);

van=van+ Number(document.getElementById('fj0').value);

document.getElementById('van').value=van;
}
