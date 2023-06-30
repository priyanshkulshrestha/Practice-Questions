//  (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.
#include<stdio.h>
// no arg
float conv(){
    int c ;
    scanf("%d",&c);
    float fer ;
    fer = (c * (9/5))+32;
    return fer;
}
int main(){

    
    printf("%f",conv());
    

    return 0;
}