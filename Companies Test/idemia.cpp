#include<iostream>
using namespace std;

int p(int input2[], int input1){
        // sort(input2,input1);
        int n  = input1;
        int i, j;
        for(int i=0;i<n;i++)
        {
        for (int j=0;j<n;j++)
            {
                if(input2[i]<input2[j])
                {
                int temp = input2[i];
                input2[i]=input2[j];
                input2[j] = temp;
                }
            }
        }
        for(i = 0;i<n;i++){
            cout<<input2[i];
        }
        int sum = 0;
        for(i =input1-1;i>0;i--){
            sum += (input2[i] - input2[i-1]);
        }
        return sum;

}

int main()
{
    int n = 4;
    int arr[4] = {1,-2,6,4};
    cout<<p(arr,n);
    return 0;
}