#include <cs50.h>
#include <stdio.h>

/*
asking for user input with get_float
perform calculation
print a float with a specific number of digits after the point
*/

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
    long first_number = get_long("x: ");
    long second_number = get_long("y: ");
    long sum = first_number + second_number;
    printf("%li\n", sum);
    */
}
