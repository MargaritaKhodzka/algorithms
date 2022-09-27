#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // prompt user for the first number
    float x = get_float("x: ");
    // prompt user for the second number
    float y = get_float("y: ");
    // divide x by y
    float z = x / y;
    printf("%.2f\n", z);
    /*
    old code
    // prompt user for the first number
    long first_number = get_long("x: ");
    // prompt user for the second number
    long second_number = get_long("y: ");
    // perform addition
    long sum = first_number + second_number;
    printf("%li\n", sum);
    */
}
