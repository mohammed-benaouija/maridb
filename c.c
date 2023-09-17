#include <stdio.h>

void ft_col(int *tab, int s)
{
    int i;
    int t;
    i = 0;
    while(i < s - 1)
    {
        if(i > 0 && tab[i] > tab[i + 1])
        {
            t = tab[i + 1];
            tab[i + 1] = tab[i];
            tab[i ] = t;
            i = - 1;
        }
        i++;
    }
}
int main() {
    
    int kkr[6] = {1,7,6,6,8,3};
    int i = 0;
    ft_col(kkr, 6);
    while(i < 5)
    {
        printf("%d,", kkr[i]);
        i++;
    }
    
    

    return 0;
}