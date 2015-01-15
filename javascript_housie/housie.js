var usedNums=new Array(91);
var counter=15;
var row=new Array(3);
var usedTab=new Array(29);
var arr=new Array(29);

window.onload=function newCard()
{
	var j,i,m;
	var x,decide,rdecide;
	for(j=0;j<91;j++)
		usedNums[j]=0;
	for(j=0;j<3;j++)
		row[j]=5;

	for(j=0;j<29;j++)
	{
		usedTab[j]=0;
//		arr[j]=0;
	}

	for(i=0;i<3;i++)
	{
		j=0;
		do{
	
			decide=Math.floor(Math.random()*2);
			if(counter!=0 && decide==1)
			{
				m=(i*10)+j;
				

				do{
					x=getNum(j);
				}while(usedNums[x]);

				if(i==0 && usedTab[m]==0)
				{
					arr[j]=x;
					counter--;
					row[i]--;
					usedNums[x]=1;
					usedTab[j]=1;
				}
				else if(i!=0 && usedTab[m]==0)
				{
					arr[m]=x;
					counter--;
					row[i]--;
					usedNums[x]=1;
					usedTab[m]=1;
				}
			}
			
			if(j<8)
				j++;
			else
				j=0;

		}while(row[i]!=0);
	}

	for(j=0;j<9;j++)	//bubble sort
	{
		for(var k=0;k<3;k++)
		{
			for(i=1;i<3;i++)
			{	m=(i*10)+j;
				n=((i-1)*10)+j;
				if(arr[m]<arr[n])
				{
					x=arr[m];
					arr[m]=arr[n];
					arr[n]=x;
				}
			}
		}
	}

	for(i=0;i<3;i++)
	{
		for(j=0;j<9;j++)
		{
			m=(i*10)+j;
			if(arr[m]!=undefined)
				document.getElementById("sq"+m).innerHTML=arr[m];
		}
	}
}

function getNum(i)
{
	var num;
	if(i%10==0)
	{
		num=Math.ceil(((i%10)*10)+(Math.random()*9));		
	}
	else if(i%10<8)
	{	
		num=((i%10)*10)+Math.floor(Math.random()*10);
	}
	else
	{
		num=((i%10)*10)+Math.floor(Math.random()*11);
	}
	
	return num;
}