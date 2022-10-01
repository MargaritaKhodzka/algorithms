#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    int number;
    struct node *left;
    struct node *right;
}
node;

// prototypes for functions
void free_tree(node *root);
void print_tree(node *root);

int main(void)
{
    // tree of size 0
    node *tree = NULL;

    // add number to list
    node *n = malloc(sizeof(node));
    if (n == NULL)
    {
        return 1;
    }

    // initialize the node to contain the 2
    n->number = 2;
    n->left = NULL;
    n->right = NULL;
    tree = n;

    // add number to list
    n = malloc(sizeof(node));
    if (n == NULL)
    {
        return 1;
    }

    n->number = 1;
    n->left = NULL;
    n->right = NULL;
    tree->left = n;

    // add number to list
    n = malloc(sizeof(node));
    if (n == NULL)
    {
        return 1;
    }

    n->number =3;
    n->left = NULL;
    n->right = NULL;
    tree->right = n;

    print_tree(tree);
    free_tree(tree);
}

void print_tree(node *root)
{
    if (root == NULL)
    {
        return;
    }

    print_tree(root->left);
    printf("%i\n", root->number);
    print_tree(root->right);
}

void free_tree(node *root)
{
    if (root == NULL)
    {
        return;
    }
    free_tree(root->left);
    free_tree(root->right);
    free(root);
}
