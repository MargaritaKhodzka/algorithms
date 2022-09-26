#include <stdio.h>

void meow(int n);

int main(void)
{
    meow(3);

    /* old code
    int i = 0;
    while (i < 3)
    {
        printf("meow\n");
        i++;
    }
    */
}

/*
meow is the name of the function
it takes an input of n
it does not return anything
*/
void meow(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}
