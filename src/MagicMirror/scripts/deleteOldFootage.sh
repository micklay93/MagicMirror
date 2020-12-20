currentDate=$(date  '+%YY%mM%dD')
echo $currentDate

oldFrontdoorCamFootage=$(ls /home/pi/SecurityCameras/<SECURITY_CAMERA_IP>/tmp/sd/record/ | grep -v $currentDate)
echo $oldFrontdoorCamFootage

for oldFolder in $oldFrontdoorCamFootage; do
    #echo "deleting old footage $oldFolder"
    echo "rm -rf /home/pi/SecurityCameras/<SECURITY_CAMERA_IP>/tmp/sd/record/$oldFolder"
    rm -rf /home/pi/SecurityCameras/<SECURITY_CAMERA_IP>/tmp/sd/record/$oldFolder
done

oldDrivewayCamFootage=$(ls /home/pi/SecurityCameras/<SECURITY_CAMERA_IP>/tmp/sd/record/ | grep -v $currentDate)
echo $oldDrivewayCamFootage

for oldFolder in $oldDrivewayCamFootage; do
    #echo "deleting old footage $oldFolder"
    echo "rm -rf /home/pi/SecurityCameras/<SECURITY_CAMERA_IP>/tmp/sd/record/$oldFolder"
    rm -rf /home/pi/SecurityCameras/<SECURITY_CAMERA_IP>/tmp/sd/record/$oldFolder
done