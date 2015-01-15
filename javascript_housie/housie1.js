window.onload=function newCard()
{
	var val= new Array(29);
	var num;

	for(var i=0;i<29;i++)
	{
		if(i%10<9)
		{
			if(i%10==0)
			{
				num=Math.ceil(((i%10)*10)+(Math.random()*9));
				val[i]=num;
				if(i/10==1 && val[i]==val[0])
				{
					num=Math.ceil(((i%10)*10)+(Math.random()*9));
					val[i]=num;	
				}
				else if(i/10==2 && val[i]==val[0] && val[i]==val[10])
				{
					num=Math.ceil(((i%10)*10)+(Math.random()*9));
					val[i]=num;
				}
				document.getElementById("sq"+i).innerHTML=num;
			}
			else if(i%10<8)
			{	num=((i%10)*10)+Math.floor(Math.random()*10);
				val[i]=num;
				if(i/10==1 && val[i]==val[i%10])
				{
					num=Math.floor(((i%10)*10)+(Math.random()*10));
					val[i]=num;
				}
				else if(i/10==2 && val[i]==val[i%10] && val[i]==val[i%10+10])
				{
					num=Math.floor(((i%10)*10)+(Math.random()*10));
					val[i]=num;
				}
				document.getElementById("sq"+i).innerHTML=(num);
			}
			else
			{
				num=((i%10)*10)+(Math.random()*11);
				val[i]=num;
				if(i/10==1 && val[i]==val[i%10])
				{
					num=Math.floor(((i%10)*10)+(Math.random()*11));
					val[i]=num;
				}
				else if(i/10==2 && val[i]==val[i%10] && val[i]==val[i%10+10])
				{
					num=Math.floor(((i%10)*10)+(Math.random()*11));
					val[i]=num;
				}
				document.getElementById("sq"+i).innerHTML=Math.floor(num);
			}
		}
	}
}