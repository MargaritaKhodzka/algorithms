#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // prompt user for the first number
    long first_number = get_long("x: ");
    // prompt user for the second number
    long second_number = get_long("y: ");
    // perform addition
    long sum = first_number + second_number;
    printf("%li\n", sum);
}
