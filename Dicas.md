Se o emulador ficar mostrando "Loading from 10.0.2.2:8081"
Altere o parametro em 
sudo sysctl fs/inotify/max_user_watches=65536 | sudo tee /etc/sysctl.d/01-inode-max-user-watches.conf
