#!/bin/bash
#
#
#
#

echo "Uploading artifact into Tomcat.."
curl --upload-file /var/lib/jenkins/workspace/svyMicroSamples/jenkins-build/build/export/sampleGallery.war "http://$T_USER:$T_PASS@tomcat-service:8080/manager/text/deploy?path=/sampleGallery"
echo "Umounting NFS share from dev-app pod"
sudo umount /usr/local/servoy
echo "Delete dev-app-pod container.."
/var/lib/jenkins/workspace/svyMicroSamples/jenkins-build/kubernetes/api-calls/del-app-pod.sh -n demo -a developerapp
