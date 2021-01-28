int inc = 0;
int des = sPalabra.length()-1;
boolean bError = false;
while ((inc<des) && (!bError)){
    if (sPalabra.charAt(inc)==sPalabra.charAt(des)){
        inc++;
        des--;
    }
    else{
        bError = true;
    }
}
if (!bError)
System.out.println(sPalabra + "Es un PALINDROMO");
else
System.out.println(sPalabra + "NO es un PALINDROMO");