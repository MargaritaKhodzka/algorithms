#include <cs50.h>
#include <stdio.h>

// asking for user input with get_char
int main(void)
{
    char c = get_char("Do you agree? ");

    // use signle quotes if dealing with single characters, chars
    if (c == 'y' || c == 'Y')
    {
        printf("Agreed.\n");
    }
    else if (c == 'n' || c == 'N')
    {
        printf("Not agreed.\n");
    }
}
