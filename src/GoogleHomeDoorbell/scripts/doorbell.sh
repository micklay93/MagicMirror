#!/bin/sh
echo "doorbell started"
while true; do
valid="<RF_FREQ_ID>"
scan=`./RFSniffer`
	if [ "$scan" = "$valid" ]; then
		d=`date +%d%m%y`
		t=`date +%T`
		echo "Doorbell Rang $t $d"
		#echo "Doorbell Rang at $t" >> log$d.txt
		python /home/pi/GoogleHomeDoorbell/triggerGoogleHome.py
		#echo $output
	else
		echo "bad read, your 433Mhz code and does not match the doorbell transmitter"
		echo $scan
	fi
sleep 20
done
exit 0
