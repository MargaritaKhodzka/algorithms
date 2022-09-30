#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    /*
    malloc uses memory from heap, instead of stack.
    it makes it possible to ask for more memory
    int list[3] uses memory from stack
    */

    // dynamically allocate an array of size 3
    int *list = malloc(3 * sizeof(int));

    if (list == NULL)
    {
        return 1;
    }

    // assign three numbers to that array
    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    // if need to add a fourth number,resize old array to be of size 4
    int *tmp = realloc(list, 4 * sizeof(int));
    if (tmp == NULL)
    {
        free(list);
        return 1;
    }

    // add fourth number to new array
    tmp[3] = 4;

    // remember new array
    list = tmp;

    // print new array
    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }

    // free new array
    free(list);
    return 0;
}
