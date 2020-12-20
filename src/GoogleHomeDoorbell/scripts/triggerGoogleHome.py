#!/usr/bin/python

import RPi.GPIO as GPIO
import time

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(24, GPIO.OUT) #GPIO24 to true

a=11

if a > 10: #If 11 > 10,
    GPIO.output(24, 0) #Deactivate GPIO 24
    time.sleep(0.2)
    GPIO.output(24, 1) #Activate GPIO 24