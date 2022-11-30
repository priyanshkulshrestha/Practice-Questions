// C++ program to determine whether the number is
// Armstrong number or not
#include <bits/stdc++.h>
using namespace std;

int power(int x, unsigned int y)
{
	if (y == 0)
		return 1;
	if (y % 2 == 0)
		return power(x, y / 2) * power(x, y / 2);
	return x * power(x, y / 2) * power(x, y / 2);
}

int order(int x)
{
	int n = 0;
	while (x) {
		n++;
		x = x / 10;
	}
	return n;
}

int isArmstrong(int x)
{
	int n = order(x);
	int temp = x, sum = 0;
	while (temp) {
		int r = temp % 10;
		sum += power(r, n);
		temp = temp / 10;
	}

	if (sum == x){
        return 1;
    }
    return sum;
}

// Driver Program
int main()
{
	int x = 13;
	cout << boolalpha << isArmstrong(x) << endl;
	x = 153;
	cout << boolalpha << isArmstrong(x) << endl;
	return 0;
}
