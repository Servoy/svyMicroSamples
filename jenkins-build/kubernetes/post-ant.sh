#!/bin/bash
curl --upload-file /var/lib/jenkins/workspace/svyMicroSamples/jenkins-build/build/export/sampleGallery.war "http://admin:1c1052da6e5f89cf0@tomcat-service:8080/manager/text/deploy?path=/sampleGallery"
sudo umount /usr/local/servoy

