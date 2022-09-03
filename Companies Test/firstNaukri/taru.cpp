int m = queries.size();
	int ans = 0;
	for(int i =0;i<m;i++){
		if(queries[i] == 1)
			ans = N;
		else if(queries[i] == 2 || queries[i] == 3){
			if(N%2 == 0)
				ans = N/2;
			else 
				ans = (N+1)/2;
		}

		else{
			ans = 0;
		}
	}
	return ans;


	B=[0 for i in range(N)]
	for i in queries:
		if i==1:
			for j in range(N):
				B[j] = 1
		elif i == 2:
			for j in range(0, N, 2):
				B[j] = 0
		elif i == 3:
			for j in range(1, N, 2):
				B[j] = 0
		elif i == 4:
			for j in range(N):
				B[j] = 0

	return B.count(1)