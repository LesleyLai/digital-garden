---
parent:
  - "[[docker|docker]]"
tags:
  - computing/docker
created: 2025-04-24
modified: 2025-04-24
publish: true
---
We can add `restart: always` to services that we need to restart on system start up. Also make sure to enable the docker service:
```sh
sudo systemctl enable docker
```

## Reference
- [Start containers automatically | docker docs](https://docs.docker.com/engine/containers/start-containers-automatically/)
- [How to run docker-compose up -d at system start up? - Stack Overflow](https://stackoverflow.com/questions/43671482/how-to-run-docker-compose-up-d-at-system-start-up)