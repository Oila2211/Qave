#!/bin/bash
cd /home/ec2-user/afriqana/backend
nohup npm start > app.log 2>&1 &
