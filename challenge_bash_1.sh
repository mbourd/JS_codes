# In the Bash script, you are provided with a script that creates a file named verify.yml and has some commands in it already. The YAML file will be used for an Ansible playbook that checks to make sure the latest version of lldpad is installed, and then the second task starts lldpad.

# Your goal is to add the second task to the YAML file so that lldpad is started. Give your task the name "check lldpad service status" Finally, your bash script should print the SHA1 hash of the contents of verify.yml so that the output looks something like: HASH_OUTPUT verify.yml. Be sure to remove all trailing spaces from each line as well.

#!/bin/bash
# This Bash script will generate the verify.yml file with the additional task to check the lldpad service status. Afterward, it calculates the SHA1 hash of the file and outputs it as HASH_OUTPUT verify.yml, removing any trailing spaces from each line.

cat > verify.yml <<EOL
- hosts: all
  tasks:
    - name: install lldpad package
      yum:
        name: lldpad
        state: latest
    - name: check lldpad service status
      service:
        name: lldpad
        state: started
EOL # Calculate SHA1 hash of verify.yml
HASH_OUTPUT=$(sha1sum verify.yml | awk '{print $1}')
echo "HASH_OUTPUT verify.yml"
