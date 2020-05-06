set count=0
for /d %%a in (*) do set /a count+=1
count=count+1;
echo %count%
dir > GFG-%count%.js