#include <cs50.h>
#include <stdio.h>

/*
drawing a pyramid using recursion
prototype function above main
asking for user input using get_int
calling the prototype function
*/
void draw(int n);

int main(void)
{
    int height = get_int("Height: ");

    draw(height);
}

void draw(int n)
{
    // ensure the function will not call itselt forever
    if (n <= 0)
    {
        return;
    }

    // the function calls itself
    draw(n - 1);

    for (int i = 0; i < n; i++)
    {
        printf("#");
    }
    printf("\n");
}
