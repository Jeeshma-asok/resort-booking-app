
check_and_create_volume() {
    local VOLUME_NAME=$1
    if docker volume inspect "$VOLUME_NAME" &>/dev/null; then
        echo "Volume $VOLUME_NAME already exists."
    else
        echo "Volume $VOLUME_NAME does not exist. Creating..."
        docker volume create "$VOLUME_NAME"
        echo "Volume $VOLUME_NAME created successfully."
    fi
}

VOLUMES=("mongodata")

for VOLUME_NAME in "${VOLUMES[@]}"; do
    check_and_create_volume "$VOLUME_NAME"
done


compose_files=(
  "docker-compose.yml"
)

compose_args=""
compose_files+=("docker-compose-build.yml")


for file in "${compose_files[@]}"; do
  compose_args+=" -f $file"
done

docker compose $compose_args down
docker compose $compose_args up --build -d

docker image prune -f --filter "dangling=true"

docker ps
