#!/bin/bash
devapppod=$(sudo kubectl get pods -n demo -o wide | grep developerapp | awk '{print $6}')
echo "devapp Pod IP: $devapppod"
sudo mount -t nfs -o nolock -o rsize=8192 -o wsize=8192 -o sync $devapppod:/usr/local/servoy /usr/local/servoy

