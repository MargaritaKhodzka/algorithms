#include <cs50.h>
#include <stdio.h>

/*
ask user input with get_string
return a message with the user input
*/
int main(void)
{
    string answer = get_string("What's your name? ");
    // the function takes in 2 inputs
    printf("hello, %s\n", answer);
}
