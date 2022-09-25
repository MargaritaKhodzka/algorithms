#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string answer = get_string("What's your name? ");
    // the function takes in 2 inputs
    printf("hello, %s\n", answer);

    /* old code 
    printf("hello, world\n");
    */
}
