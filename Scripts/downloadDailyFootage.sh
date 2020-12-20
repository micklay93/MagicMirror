currentDate=$(date  '+%YY%mM%dD')

cd /home/pi/Camera
wget -m --user root --password <PASSWORD> ftp://<SECURITY_CAMERA_IP>//tmp/sd/record/$currentDate*
sleep 10
rclone copy /home/pi/Camera/<SECURITY_CAMERA_IP>/tmp/sd/record/ GoogleDrive:CCTV/FrontdoorCamera

sleep 5

wget -m --user root --password <PASSWORD> ftp://<SECURITY_CAMERA_IP>//tmp/sd/record/$currentDate*
sleep 10
rclone copy /home/pi/Camera/<SECURITY_CAMERA_IP>/tmp/sd/record/ GoogleDrive:CCTV/DrivewayCamera